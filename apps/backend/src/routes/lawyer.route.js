import { Router } from 'express';
import {
  createLawyer,
  deleteLawyer,
  getAllLawyers,
  getOneLawyer,
  updateOneLawyer,
} from '../controllers/lawyer.controller';

const lawyerRoute = Router();
lawyerRoute
  .get('/', getAllLawyers)
  .get('/:id', getOneLawyer)
  .patch('/:id', updateOneLawyer)
  .post('/', createLawyer)
  .delete('/:id', deleteLawyer);

export default lawyerRoute;
