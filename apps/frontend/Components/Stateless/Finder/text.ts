import { IOptions } from '../../Inputs/Select/Select_Input';

export const finder_text = {
  secondary: `Search for a Lawyer in Your Area.`,
  paragraph: `Easily find top-tier legal representation with our intuitive Search Tool—just choose your city and
  relevant category. We deliver a curated list of champions ready to advocate for your cause.
  `,
};

export const finder_options: IOptions[] = [
  { text: 'Civil', value: 'civil' },
  { text: 'Criminal', value: 'criminal' },
  { text: 'Family', value: 'family' },
  { text: 'FIA', value: 'fia' },
];
