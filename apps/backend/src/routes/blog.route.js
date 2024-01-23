import { Router } from 'express';
import {
  createBlog,
  deleteOneBlog,
  getAllBlogs,
  getOneBlog,
  updateOneBlog,
} from '../controllers/blog.controller';
import {
  resizeSingleImage,
  uploadSingleImage,
} from '../controllers/image.controller';

const blogRouter = Router();
blogRouter
  .get('/', getAllBlogs)
  .get('/:id', getOneBlog)
  .patch(
    '/:id',
    uploadSingleImage('coverPicture'),
    resizeSingleImage('coverPicture', 'blogs', { width: 1200, height: 500 }),
    updateOneBlog
  )
  .post(
    '/',
    uploadSingleImage('coverPicture'),
    resizeSingleImage('coverPicture', 'blogs', { width: 1200, height: 500 }),
    createBlog
  )
  .delete('/:id', deleteOneBlog);

export default blogRouter;
