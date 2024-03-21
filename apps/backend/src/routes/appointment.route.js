import { Router } from 'express';
import {
  createAppointment,
  getAllAppointment,
  getOneAppointment,
  deleteAppointment,
  updateOneAppointment,
} from '../controllers/appointment.controller';

const appointmentRouter = Router();

appointmentRouter
  .get('/', getAllAppointment)
  .get('/:id', getOneAppointment)
  .patch('/:id', updateOneAppointment)
  .post('/', createAppointment)
  .delete('/:id', deleteAppointment);

export default appointmentRouter;
