'use client';
import Image from 'next/image';
import classes from './Team_Card.module.scss';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
import { forwardRef } from 'react';
import { useRouter } from 'next/navigation';
import { envConfig } from '@/envConfig';

export interface ITeamCard {
  profilePicture: string;
  firstName: string;
  lastName: string;
  professions: string[];
  _id: string;
}

export const Team_Card_Component = (
  { profilePicture, firstName, lastName, professions, _id }: ITeamCard,
  childRef: any
) => {
  const router = useRouter();
  const handle_profile_redirect = () => {
    router.push('/lawyers/' + _id);
  };
  return (
    <figure className={classes['card']} ref={childRef}>
      <div className={classes['card__image']}>
        <Image
          src={
            envConfig.STORAGE_BUCKET_URL +
            '/assets/profile/small/' +
            profilePicture
          }
          fill
          style={{ objectFit: 'cover' }}
          alt={firstName + ' ' + lastName}
        />
      </div>
      <Typography
        vairent="p"
        component="p"
        color={'var(--color-secondary)'}
        text={'Adv. ' + firstName + ' ' + lastName}
        style={{ fontWeight: 'bold', marginBottom: '.5rem' }}
      />
      <Typography
        vairent="p"
        component="p"
        color={'var(--color-white)'}
        text={professions?.join(' & ')}
        style={{ marginBottom: '1rem' }}
      />
      <Button
        varient="outline"
        onClick={handle_profile_redirect}
        text="Full Details"
        iconEnd={
          <IconArrow
            color="currentColor"
            style={{ marginLeft: '.4rem', transform: 'translateY(.3rem)' }}
          />
        }
        style={{
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-white)',
          border: '3px solid currentColor',
        }}
      />
    </figure>
  );
};

Team_Card_Component.displayName = 'Team Card';

export default forwardRef(Team_Card_Component);
