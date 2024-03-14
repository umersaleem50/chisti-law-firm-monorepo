import {
  createDocument,
  deleteOneDocument,
  getAllDocuments,
  getDocument,
  updateOneDocument,
} from '../utils/handlerFactory';

import Blog from '../models/blog.model';

export const createBlog = createDocument(Blog, {});
export const getAllBlogs = getAllDocuments(Blog);
export const getOneBlog = getDocument(Blog, { findBy: 'slug' });
export const updateOneBlog = updateOneDocument(Blog);
export const deleteOneBlog = deleteOneDocument(Blog);
