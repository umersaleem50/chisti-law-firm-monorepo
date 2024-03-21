import { isEmail } from 'validator';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please tell us about your name.'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email.'],
    validate: [isEmail, 'Please provide a valid email'],
  },

  password: {
    type: String,
    required: [true, 'You must to need to provide a strong password.'],
    min: [8, 'Please should contain atleast 8 characters.'],
    max: [64, 'Please should contain atleast 64 characters.'],
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password.'],
    validate: {
      validator: function (val) {
        if (this.password === val) return true;
        else return false;
      },
      message: 'Password doesnot match.',
    },
    select: false,
  },

  passwordChangedAt: {
    type: Date,
    select: false,
  },

  passwordResetToken: {
    type: String,
    select: false,
  },

  passwordResetExpire: {
    type: Date,
    select: false,
  },

  birthDate: {
    type: Date,
    default: new Date(Date.now()),
    // required: [true, "Please provide your birth Date."],
  },

  role: {
    type: String,
    default: 'user',
    enum: {
      values: ['user', 'admin', 'developer'],
      message: 'Please select role between user or admin',
    },
  },

  active: {
    type: Boolean,
    default: true,
  },
});

userSchema.methods.correctPassword = async function (
  inputPassword,
  encrypedPassword
) {
  return await bcrypt.compare(inputPassword, encrypedPassword);
};

userSchema.methods.createResetToken = async function () {
  const randomToken = crypto.randomBytes(32).toString('hex');
  const resetToken = crypto
    .createHash('sha256')
    .update(randomToken)
    .digest('hex');
  this.passwordResetToken = resetToken;
  this.passwordResetExpire = Date.now() + 10 * 60 * 60 * 1000;
  return randomToken;
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = '';
  next();
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password') && !this.isNew) {
    this.passwordChangedAt = new Date(Date.now() - 2000);
  }
  next();
});

const User = model('user', userSchema);

export default User;
