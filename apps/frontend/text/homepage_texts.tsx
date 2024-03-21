import { IOptions } from '../Components/Inputs/Select/Select_Input';
import { IServiceCard } from '../Components/Stateless/Service_Card/Service_Card';
import { GiPistolGun as IconGun } from 'react-icons/gi';
import { TfiTarget as IconTarget } from 'react-icons/tfi';
import { IoNewspaperOutline as IconPaper } from 'react-icons/io5';
import { AiOutlineTrademark as IconTradmark } from 'react-icons/ai';
import { IoMdPaperPlane as IconImigration } from 'react-icons/io';
import { GiDominoMask as IconMask } from 'react-icons/gi';
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
    Icon: IconGun,
    title: 'Criminal Cases',
    url: '/services/criminal-cases',
  },
  {
    Icon: IconPaper,
    title: 'Family Cases',
    url: '/services/family-cases',
  },
  {
    Icon: IconMask,
    title: 'FIA Cases',
    url: '/services/fia-cases',
  },
  {
    Icon: IconImigration,
    title: 'Imigration Cases',
    url: '/services/imigration-cases',
  },
  {
    Icon: IconTradmark,
    title: 'Trademarks & Copyright',
    url: '/services/trademark-and-copyright',
  },
  {
    Icon: IconTarget,
    title: 'Murder Cases',
    url: '/services/302-criminal',
  },
];
