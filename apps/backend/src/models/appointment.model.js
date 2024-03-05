import { model, Schema } from 'mongoose';

const appointmentSchema = new Schema({
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
  country: {
    type: String,
    required: [true, 'Please enter your country.'],
  },
  phone: {
    type: String,
    required: [true, 'Please enter your phone no.'],
  },
  address: {
    type: String,
    required: [true, 'Please enter your address.'],
  },
  subject: {
    type: String,
    required: [true, 'Please enter the subject matter.'],
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

const Appointment = model('appointments', appointmentSchema);

export default Appointment;
