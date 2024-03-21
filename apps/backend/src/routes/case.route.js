import { Router } from 'express';
import {
  createCase,
  deleteCase,
  getAllCase,
  getOneCase,
  updateOneCase,
} from '../controllers/case.controller';
// import { protectedRoute } from '../controllers/auth.controller';

const caseRouter = Router();

// caseRouter.use(protectedRoute);

caseRouter
  .get('/', getAllCase)
  .get('/:id', getOneCase)
  .patch('/:id', updateOneCase)
  .post('/', createCase)
  .delete('/:id', deleteCase);

export default caseRouter;
