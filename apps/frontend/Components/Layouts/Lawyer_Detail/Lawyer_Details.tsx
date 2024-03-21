// "use client";
import Section from '@/Components/Stateless/Section/Section';
import classes from './Lawyer_Details.module.scss';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import { BtnHomepage } from '@/Components/Button/Button.stories';
import ProfileDetails from '../Profile_Details/Profile_Details';
import Profile_Education from '../Profile_Education/Profile_Education';
import Gallery, { IGalleryItem } from '../Gallery/Gallery';

import { notFound } from 'next/navigation';

export interface ILawyer {
  contact: string;
  firstName: string;
  email?: string;
  lastName: string;
  professions: string[];
  workplace: string;
  bio: string;
  gallery: IGalleryItem[];
  profilePicture: string;
  expirence: {
    course: string;
    start_date: string;
    description: string;
    institue: string;
    _id: string;
  }[];
}

const Lawyer_Details = async ({
  contact,
  bio,
  expirence,
  firstName,
  gallery,
  lastName,
  professions,
  profilePicture,
  workplace,
  email,
}: ILawyer) => {
  return (
    <div className={classes['main']}>
      {/* <Section> */}
      <BtnHomepage />
      <ProfileLayout
        contact={contact}
        name={firstName + ' ' + lastName}
        professions={professions}
        profileSrc={profilePicture}
        workplace={workplace}
      />
      <ProfileDetails bio={bio} />
      {/* </Section> */}
      <Section>
        <Profile_Education expirenceArr={expirence} />
      </Section>
      {gallery?.length && (
        <Section>
          <Gallery title="Gallery" images={gallery} />
        </Section>
      )}
    </div>
  );
};

export default Lawyer_Details;
