import {
  createDocument,
  deleteOneDocument,
  getAllDocuments,
  getDocument,
  updateOneDocument,
} from '../utils/handlerFactory';
import Case from '../models/case.model';

export const createCase = createDocument(Case, {});
export const getAllCase = getAllDocuments(Case);
export const getOneCase = getDocument(Case);
export const updateOneCase = updateOneDocument(Case);
export const deleteCase = deleteOneDocument(Case);
