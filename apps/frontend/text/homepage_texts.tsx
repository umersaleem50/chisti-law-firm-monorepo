import { IOptions } from '../Components/Inputs/Select/Select_Input';
import { IServiceCard } from '../Components/Stateless/Service_Card/Service_Card';
import { LiaHandshake as IconHand } from 'react-icons/lia';
export const finder_text = {
  secondary: `Search For a Lawyer in your area.`,
  paragraph: `Our Search tool will help you to find a good lawyer in your area.
  Select a City & choose a category, and it will show you the desired results.`,
};

export const finder_options: IOptions[] = [
  { text: 'Civil', value: 'civil' },
  { text: 'Criminal', value: 'criminal' },
  { text: 'Family', value: 'family' },
  { text: 'FIA', value: 'fia' },
];

export const header_text = {
  primary: `Welcome to Chisht Law Firm`,
  paragraph: `Chishti law firm will help you to find a good lawyer for your cases. All you have to is book an appointment and our lawyer will contact you & guide you in the whole process. Feel free to make an appointment.`,
};

export const services_data: IServiceCard[] = [
  {
    Icon: IconHand,
    title: 'Civil Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'Criminal Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'FIA Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'Imigration Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'Trademarks Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'Taxiation Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'Corporate Cases',
    url: '/civil',
  },
  {
    Icon: IconHand,
    title: 'Cyber Cases',
    url: '/civil',
  },
];
