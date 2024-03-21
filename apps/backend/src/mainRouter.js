import { Router } from 'express';
import serviceRouter from './routes/service.route';
import appointmentRouter from './routes/appointment.route';
import lawyerRoute from './routes/lawyer.route';
import blogRouter from './routes/blog.route';
import authRouter from './routes/auth.route';
import caseRouter from './routes/case.route';

const mainRouter = Router();

mainRouter.use('/services', serviceRouter);
mainRouter.use('/appointments', appointmentRouter);
mainRouter.use('/lawyers', lawyerRoute);
mainRouter.use('/blogs', blogRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/cases', caseRouter);

export default mainRouter;
