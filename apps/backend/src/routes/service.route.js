import { Router } from 'express';
import {
  createService,
  getAllServices,
  getOneService,
  updateOneService,
} from '../controllers/service.controller';
import { deleteOneDocument } from '../utils/handlerFactory';

const serviceRouter = Router();

serviceRouter
  .get('/', getAllServices)
  .get('/:id', getOneService)
  .patch('/:id', updateOneService)
  .post('/', createService)
  .delete('/:id', deleteOneDocument);

export default serviceRouter;
