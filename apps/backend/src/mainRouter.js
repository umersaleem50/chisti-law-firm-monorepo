import { Router } from 'express';
import serviceRouter from './routes/service.route';

const mainRouter = Router();

mainRouter.use('/services', serviceRouter);

export default mainRouter;
