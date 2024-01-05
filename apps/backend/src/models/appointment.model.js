import { model, Schema } from 'mongoose';

const LawyerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your firstname.'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your lastname.'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email.'],
  },
  workplace: {
    type: String,
    required: [true, 'Please enter your workplace.'],
  },
  contact: {
    type: String,
    required: [true, 'Please enter your contact no.'],
  },
  profilePicture: {
    type: String,
  },
  expirence: {
    type: {
      years: { type: Number },
      totalCases: { type: Number },
    },
  },
  description: {
    type: String,
  },

  gallery: [String],

  education: [
    {
      type: {
        title: String,
        institue: String,
        description: String,
      },
    },
  ],
});

const Lawyer = model('lawyer', LawyerSchema);

export default Lawyer;
