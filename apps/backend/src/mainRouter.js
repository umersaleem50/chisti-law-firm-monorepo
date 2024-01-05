import { Router } from 'express';
import serviceRouter from './routes/service.route';
import appointmentRouter from './routes/appointment.route';

const mainRouter = Router();

mainRouter.use('/services', serviceRouter);
mainRouter.use('/appointment', appointmentRouter);

export default mainRouter;
