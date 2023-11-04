import { model, Schema } from 'mongoose';

const ServiceSchema = new Schema({
  image: { type: String, required: [true, 'Please put an image.'] },
  slug: {
    type: String,
    required: [true, 'Please enter a unique slug.'],
    unique: [true, 'Please choose another slug.'],
  },
  title: {
    type: String,
    required: [true, 'Please add a title for the service.'],
    min: [10, 'A title must be more then 10 characters.'],
    max: [300, 'A title must be less then 300 characters.'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description for service.'],
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
});

const ServiceModel = model('service', ServiceSchema);

export default ServiceModel;
