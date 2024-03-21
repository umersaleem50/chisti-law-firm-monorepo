import {
  createDocument,
  deleteOneDocument,
  getAllDocuments,
  getDocument,
  updateOneDocument,
} from '../utils/handlerFactory';
import ServiceModel from '../models/service.model';

export const createService = createDocument(ServiceModel, {});
export const getAllServices = getAllDocuments(ServiceModel);
export const getOneService = getDocument(ServiceModel, { findBy: 'slug' });
export const updateOneService = updateOneDocument(ServiceModel);
export const deleteService = deleteOneDocument(ServiceModel);
