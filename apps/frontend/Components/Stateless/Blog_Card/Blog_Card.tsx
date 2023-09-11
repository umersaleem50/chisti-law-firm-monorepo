'use client';
import Image from 'next/image';
import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
import classes from './Blog_Card.module.scss';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
export interface IBlogCard {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
  heading: string;
  paragraph: string;
  isButtonActive?: boolean;
}
const Blog_Card = ({
  src,
  alt,
  objectFit = 'cover',
  heading,
  paragraph,
  isButtonActive = false,
}: IBlogCard) => {
  return (
    <figure className={classes['card']}>
      <div className={classes['card__image']}>
        <Image
          src={process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL + '/' + src}
          alt={alt}
          fill
          style={{ objectFit: objectFit }}
        />
      </div>
      <Typography
        vairent="h6"
        component="h6"
        color="var(--color-accent)"
        text={heading}
        customClasses={[classes['text--heading']]}
      />
      <Typography
        vairent="p"
        component="p"
        color="var(--color-font)"
        text={paragraph}
        customClasses={[classes['text--paragraph']]}
      />
      <Button
        varient="outline"
        onClick={() => {}}
        text="Read More"
        isActive={isButtonActive}
        modifier="secondary"
        iconEnd={
          <IconArrow
            color="currentColor"
            style={{ marginLeft: '.4rem', transform: 'translateY(.3rem)' }}
          />
        }
      />
    </figure>
  );
};

export default Blog_Card;
