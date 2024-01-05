import {
    createDocument,
    deleteOneDocument,
    getAllDocuments,
    getDocument,
    updateOneDocument,
  } from '../utils/handlerFactory';
  import Appointment from '../models/appointment.model';
  
  export const createAppointment = createDocument(Appointment, {});
  export const getAllAppointment = getAllDocuments(Appointment);
  export const getOneAppointment = getDocument(Appointment);
  export const updateOneAppointment = updateOneDocument(Appointment);
  export const deleteAppointment = deleteOneDocument(Appointment);
  