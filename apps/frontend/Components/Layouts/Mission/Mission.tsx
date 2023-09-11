'use client';
import Image from 'next/image';
import { GenerateUi } from '@law-firm/generate-ui';

import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
import Section from '../../Stateless/Section/Section';
import classes from './Mission.module.scss';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import { mission_raw_data } from '../../../text/mission_raw_data';

export interface IMissonElement {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain';
  reverseElement?: boolean;
  heading: string;
  paragraph: string;
  otherOptions: {
    type: 'text' | 'button';
    text: string;
    url?: string;
    otherText?: string;
  };
}

export const UIElement = ({
  src,
  alt,
  objectFit = 'cover',
  reverseElement = true,
  heading,
  paragraph,
  otherOptions,
}: IMissonElement) => {
  return (
    <div
      className={[
        classes['element'],
        reverseElement ? classes['element--reverse'] : '',
      ].join(' ')}
    >
      <div className={classes['element__image']}>
        <Image
          src={'/assets/homepage/' + src}
          alt={alt}
          fill
          style={{ objectFit: objectFit }}
          // objectFit={objectFit}
        />
      </div>
      <div className={classes['element__details']}>
        <Typography
          vairent="secondary"
          component="h6"
          color="var(--color-font)"
          customClasses={[classes['element__text']]}
        >
          {heading}
        </Typography>
        <Typography
          vairent="p"
          component="p"
          color="var(--color-font)"
          customClasses={[classes['element__text']]}
        >
          {paragraph}
        </Typography>
        {otherOptions.type === 'text' && (
          <>
            <Typography
              component="p"
              vairent="p"
              style={{ fontWeight: 'bold' }}
              customClasses={[classes['element__text--small']]}
            >
              {otherOptions.text}
            </Typography>
            <Typography component="p" vairent="p">
              {otherOptions.otherText}
            </Typography>
          </>
        )}

        {otherOptions.type === 'button' && (
          <>
            <Button
              varient="outline"
              onClick={() => {}}
              modifier="secondary"
              iconEnd={
                <IconArrow
                  color="currentColor"
                  style={{
                    marginLeft: '.4rem',
                    transform: 'translateY(.3rem)',
                  }}
                />
              }
            >
              {otherOptions.text}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className={classes['container']}>
      <div className={classes['item']}>
        {GenerateUi({ RenderElement: UIElement, dataArr: mission_raw_data })}
      </div>
    </div>
  );
};

const Mission = () => {
  return (
    <Section
      heading="Our Mission"
      paragraph="We’re offering a ton of services for you. Our lawyers are professionals and have ton of experience in their respected field."
      buttonOptions={{ text: 'show all', url: '/' }}
    >
      <Container />
    </Section>
  );
};

export default Mission;
