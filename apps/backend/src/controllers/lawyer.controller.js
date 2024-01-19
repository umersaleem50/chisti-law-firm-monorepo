import {
  createDocument,
  deleteOneDocument,
  getAllDocuments,
  getDocument,
  updateOneDocument,
} from '../utils/handlerFactory';

import Lawyer from '../models/appointment.model';

export const createLawyer = createDocument(Lawyer, {});
export const getAllLawyers = getAllDocuments(Lawyer);
export const getOneLawyer = getDocument(Lawyer);
export const updateOneLawyer = updateOneDocument(Lawyer);
export const deleteLawyer = deleteOneDocument(Lawyer);
