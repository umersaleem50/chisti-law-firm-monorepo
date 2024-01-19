import { model, Schema } from 'mongoose';

const LawyerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name.'],
  },
  email: {
    type: String,
    email: [true, 'Please enter email accociated with lawyer.'],
    unique: true,
  },
  workingAt: {
    type: String,
    required: [true, 'Please enter workplace location.'],
  },
  professions: {
    type: [String],
    required: [true, 'Please enter the professions'],
  },
  phoneNo: {
    type: String,
    required: [true, 'Please enter your business phone no.'],
  },
  profilePicture: {
    type: String,
    default: 'profile-picture.jpg',
  },
  bio: {
    type: String,
    min: [30, 'Please keep the bio between 30 - 400 words max.'],
    max: [400, 'Please keep the bio between 30 - 400 words max.'],
  },
  gallery: [String],
  expirence: [
    {
      course: {
        type: String,
        required: [true, 'Please enter your course title.'],
      },
      start_date: {
        type: Date,
        require: [
          true,
          'Please enter the starting date of your expirence or education.',
        ],
      },
      end_date: {
        type: Date,
      },
      description: String,
      institue: String,
    },
  ],
});

const Lawyer = model('service', LawyerSchema);

export default Lawyer;
