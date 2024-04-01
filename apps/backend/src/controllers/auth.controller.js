import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { promisify } from 'util';
import { sendMail } from '../utils/sendMail';
import catchAsync from '../utils/catchAsync';
import apiError from '../utils/apiError';

const sendTokenRes = (req, res, status, data) => {
  // const cookieOptions = {
  //   maxAge: process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
  //   // new Date(
  //   //   Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN || 15) * 24 * 60 * 60 * 1000
  //   // ),

  //   httpOnly: true,
  // };

  // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', data.token, {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  return res.status(status).json({ status: 'success', data });
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });
};

export const signUp = catchAsync(async (req, res, next) => {
  //Make user
  const user = await User.create(req.body);
  //Give jwt Token
  const token = createToken(user._id);

  //Send Response
  sendTokenRes(req, res, 201, { token, data: user });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new apiError('Please enter email & password.', 401));

  const user = await User.findOne({ email }).select('+password');
  if (!user) return next(new apiError('No user exist with this email.', 404));

  if (!(await user.correctPassword(password, user.password)))
    return next(new apiError('Invalid email or password', 401));

  //Hide encryped password in request
  user.password = undefined;

  const token = createToken(user._id);

  sendTokenRes(req, res, 200, { token, data: user });
});

export const protectedRoute = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.header('authorization') &&
    req.header('authorization').startsWith('Bearer')
  ) {
    token = req.header('authorization').split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(new apiError('Please login first to use this route.', 401));

  //CHECKS IF THE TOKEN IS VALID OR AND NOT EXPIRED, RETURNS PAYLOAD
  const decodeToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRETKEY
  );

  const user = await User.findById({ _id: decodeToken.id }).select(
    '+passwordChangedAt'
  );

  //IF NO USER EXIST OR DEACTIVATED THE ACCOUNT.
  if (!user) return next(new apiError('No user exist.', 404));

  //IF USER CHANGED PASSWORD AFTER ISSUING THE TOKEN.
  if (
    user.passwordChangedAt &&
    user.passwordChangedAt.getTime() > decodeToken.iat * 1000
  ) {
    return next(
      new apiError(
        'User changed password after issuing token. Please login again.',
        400
      )
    );
  }

  req.user = user;

  next();
});

export const forgetPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email)
    return next(
      new apiError('Please provide your email of your account.', 401)
    );

  const user = await User.findOne({ email });

  if (!user)
    return next(new apiError('No user exist. Or account is deactivated.', 404));

  //CREATE AND SAVE RESET TOKEN IN DATABASE
  const resetToken = await user.createResetToken();

  await user.save({ validateBeforeSave: false });

  //SEND MAIL TO GIVEN EMAIL

  await sendMail(email, resetToken);

  res.status(200).json({
    status: 'success',
    message: 'Reset link sent to your email. Please check your mail',
  });
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const { token } = req.params;
  const { password, passwordConfirm } = req.body;
  if (!token)
    return next(
      new apiError('Please check your mail to get reset token.', 400)
    );

  if (!password || !passwordConfirm)
    return next(
      new apiError('Please enter your new password & passwordConfirm.', 401)
    );

  const decryptedResetToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const user = await User.findOne({ resetPasswordToken: token }).select(
    '+passwordResetToken +passwordResetExpire'
  );

  if (!user) {
    return next('Invalid Reset Token, Please check your mail', 401);
  }

  if (
    !user.passwordResetToken ||
    (user.passwordResetExpire &&
      user.passwordResetExpire.getTime() < Date.now())
  ) {
    return next(new apiError('Reset token expired.', 401));
  }

  user.passwordResetToken = '';
  user.passwordResetExpire = null;
  user.password = password;
  user.passwordConfirm = passwordConfirm;

  await user.save({ validateBeforeSave: true });

  res
    .status(200)
    .json({ status: 'success', message: 'Password changed successfully.' });
});

export const changePassword = catchAsync(async (req, res, next) => {
  const { oldPassword, password, passwordConfirm } = req.body;

  if (!oldPassword || !password || !passwordConfirm)
    return next(
      new apiError('Please enter oldPassword, password & passwordConfirm.', 400)
    );

  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.correctPassword(oldPassword, user.password)))
    return next(new apiError('Invalid old password.', 401));

  if (password !== passwordConfirm)
    return next(new apiError('password & passwordConfirm not match.', 400));

  user.password = password;
  user.passwordConfirm = passwordConfirm;

  await user.save();

  res
    .status(200)
    .json({ status: 'success', message: 'Password Changed Successfully.' });
});

export const deactivateAccount = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    message: 'Account deactivated successfully.',
  });
});

export const getCurrentUser = catchAsync(async (req, res, next) => {
  res.status(200).json({
    data: req.user,
  });
});

export const restrictedTo = (...users) => {
  return (req, res, next) => {
    if (!users.includes(req?.user?.role))
      return next(
        new apiError(`You're not allowed to access this route.`, 400)
      );
    next();
  };
};

export const logout = catchAsync((req, res) => {
  res.cookie('jwt', '');
  return res.status(200);
});

export const verifyCredientials = (req, res) => {
  return res.status(200).json({ message: 'verified' });
};
