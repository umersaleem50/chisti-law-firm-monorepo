import { model, Schema } from 'mongoose';

const BlogSchema = new Schema({
  coverPicture: {
    type: String,
    required: [true, 'Please provide a cover picture.'],
  },
  slug: { type: String, required: 'Provide a slug for blog.', unique: true },
  heading: {
    type: String,
    required: [true, 'Please enter heading for blog.'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the description for blog.'],
  },
  content: [
    {
      heading: {
        type: String,
      },
      paragraph: {
        type: String,
      },
    },
  ],
  readtime: {
    type: String,
    required: [true, 'Please provide read duration for your blog.'],
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = model('blog', BlogSchema);

export default Blog;
