import { Schema, model } from 'mongoose';
import { caseTypesPakistan } from '../utils/caseTypes';

const CaseSchema = new Schema({
  prevDate: {
    type: Date,
    required: [true, 'Please choose a previous date.'],
  },
  title: {
    type: String,
    required: [true, 'Please enter the title for the entry.'],
  },
  caseCategory: {
    type: String,
    enum: {
      values: caseTypesPakistan,
      message: 'Please choose a correct case type.',
    },
  },

  stage: { type: String },
  courtName: { type: String },
  nextDate: { type: Date },
});

const Case = model('cases', CaseSchema);

export default Case;
