import { Router } from 'express';
import {
  signUp,
  login,
  resetPassword,
  changePassword,
  forgetPassword,
  deactivateAccount,
  getCurrentUser,
  protectedRoute,
  logout,
  verifyCredientials,
} from '../controllers/auth.controller';

const authRouter = Router();

authRouter
  .post('/signup', signUp)
  .post('/signin', login)
  .post('/reset-password/:token', resetPassword)
  .post('/forget-password', forgetPassword);

authRouter.use(protectedRoute);
authRouter
  .post('/profile', getCurrentUser)
  .post('/change-password', changePassword)
  .post('/de-activate', deactivateAccount)
  .post('/logout', logout)
  .post('/verify', verifyCredientials);

export default authRouter;
