import { model, models, Schema } from 'mongoose';

const LawyerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your firstName.'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your lastName'],
  },
  email: {
    type: String,
    email: [true, 'Please enter email associated with lawyer.'],
    unique: true,
  },
  workplace: {
    type: String,
    required: [true, 'Please enter workplace location.'],
  },
  professions: {
    type: [String],
    required: [true, 'Please enter the professions'],
  },
  contact: {
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
    required: [true, 'Please enter your bio.'],
  },
  gallery: [String],
  expirenceYears: Number,
  expirence: {
    type: [
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
    required: [true, 'Please enter your expirences.'],
  },
});

const Lawyer = model('lawyers', LawyerSchema);

export default Lawyer;
