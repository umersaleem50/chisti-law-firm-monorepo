'use client';
import Image from 'next/image';
import classes from './Team_Card.module.scss';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
import { forwardRef } from 'react';

export interface ITeamCard {
  src: string;
  personName: string;
  professions: string[];
}

export const Team_Card_Component = (
  { src, personName, professions }: ITeamCard,
  childRef: any
) => {
  return (
    <figure className={classes['card']} ref={childRef}>
      <div className={classes['card__image']}>
        <Image
          src={process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL + '/' + src}
          fill
          style={{ objectFit: 'cover' }}
          alt={personName}
        />
      </div>
      <Typography
        vairent="p"
        component="p"
        color={'var(--color-secondary)'}
        text={personName}
        style={{ fontWeight: 'bold', marginBottom: '.5rem' }}
      />
      <Typography
        vairent="p"
        component="p"
        color={'var(--color-white)'}
        text={professions.join(' & ')}
        style={{ marginBottom: '1rem' }}
      />
      <Button
        varient="outline"
        onClick={() => {}}
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
