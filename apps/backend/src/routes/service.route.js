import { Router } from 'express';
import {
  createService,
  getAllServices,
  getOneService,
  updateOneService,
  deleteService,
} from '../controllers/service.controller';

const serviceRouter = Router();

serviceRouter
  .get('/', getAllServices)
  .get('/:id', getOneService)
  .patch('/:id', updateOneService)
  .post('/', createService)
  .delete('/:id', deleteService);

export default serviceRouter;
