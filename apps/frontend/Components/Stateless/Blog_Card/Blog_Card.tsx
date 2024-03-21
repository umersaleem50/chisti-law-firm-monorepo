'use client';
import Image from 'next/image';
import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
import classes from './Blog_Card.module.scss';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { envConfig } from '@/envConfig';
export interface IBlogCard {
  coverPicture: string;
  alt: string;
  slug: string;
  objectFit?: 'cover' | 'contain';
  heading: string;
  description: string;
  isButtonActive?: boolean;
}
const Blog_Card = ({
  coverPicture,
  slug,
  alt,
  objectFit = 'cover',
  heading,
  description,
  isButtonActive = false,
}: IBlogCard) => {
  return (
    <figure className={classes['card']}>
      <div className={classes['card__image']}>
        <Image
          src={
            envConfig.STORAGE_BUCKET_URL + '/assets/blogs/small/' + coverPicture
          }
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
        text={description}
        customClasses={[classes['text--paragraph']]}
      />
      <Link href={'/blogs/' + slug}>
        <Button
          varient="outline"
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
      </Link>
    </figure>
  );
};

export interface IBlogCardLarge {
  createdOn: string;
  readtime: string;
  heading: string;
  description: string;
  coverPicture: string;
  alt: string;
  slug: string;
}
export function Blog_Card_Large({
  createdOn,
  readtime,
  heading,
  description,
  coverPicture,
  alt,
  slug,
}: IBlogCardLarge) {
  const router = useRouter();
  const handle_blog_redirect = () => {
    router.push('/blogs/' + slug);
  };
  return (
    <figure className={classes['large']} onClick={handle_blog_redirect}>
      <div className={classes['large__image']}>
        <Image
          src={
            envConfig.STORAGE_BUCKET_URL + '/assets/blogs/small/' + coverPicture
          }
          fill
          alt={alt}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <caption className={classes['right']}>
        <div className={classes['right__top']}>
          <Typography
            vairent="p"
            color="var(--color-font)"
            component="p"
            style={{ fontWeight: 'bold' }}
          >
            {new Date(createdOn).toDateString()}
          </Typography>
          <Typography
            vairent="p"
            color="var(--color-secondary)"
            component="p"
            style={{ fontWeight: 'bold' }}
          >
            {readtime}
          </Typography>
        </div>
        <div className={classes['right__container']}>
          <Typography vairent="h6" component="h6" color="var(--color-black)">
            {heading}
          </Typography>
          <Typography vairent="p" component="p" color="var(--color-grey-3)">
            {description}
          </Typography>
        </div>
      </caption>
    </figure>
  );
}

export default Blog_Card;
