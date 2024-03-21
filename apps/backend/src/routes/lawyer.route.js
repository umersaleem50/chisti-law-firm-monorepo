import { Router } from 'express';
import {
  createLawyer,
  deleteLawyer,
  getAllLawyers,
  getOneLawyer,
  updateOneLawyer,
} from '../controllers/lawyer.controller';
import {
  resizeImages,
  resizeLawyerProfilePicture,
  resizeSingleImage,
  uploadLawyersImages,
} from '../controllers/image.controller';

const lawyerRoute = Router();
lawyerRoute
  .get('/', getAllLawyers)
  .get('/:id', getOneLawyer)
  .patch(
    '/:id',
    uploadLawyersImages,
    resizeSingleImage('profilePicture', 'profile', {
      width: 1000,
      height: 1000,
    }),
    updateOneLawyer
  )
  .post(
    '/',
    // uploadImages('gallery'),
    uploadLawyersImages,
    resizeImages('gallery', 'gallery', { width: 1200, height: 900 }),
    // uploadSingleImage('profilePicture'),
    resizeLawyerProfilePicture('profilePicture', 'profile', {
      width: 1000,
      height: 1000,
    }),
    // resizeImages('profilePicture', 'profile', { width: 1000, height: 1000 }),
    createLawyer
  )
  .delete('/:id', deleteLawyer);

export default lawyerRoute;
