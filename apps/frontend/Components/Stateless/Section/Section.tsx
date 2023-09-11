'use client';
import Button from '../../Button/Button';
import Typography, { ITypography } from '../../Typography/Typography';
import classes from './Section.module.scss';
// import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
type ButtonEvent = MouseEvent<HTMLButtonElement>;
import { IButton } from '../../Button/Button';

interface ISectionButton extends IButton {
  url: string;
}

export type ISection = {
  heading?: string;
  paragraph?: string;
  buttonOptions?: Partial<ISectionButton>;
  textColor?: string;
  children: any;
  varient?: 'default' | 'fullScreen';
};

const Section = ({
  heading,
  paragraph,
  buttonOptions,
  children,
  textColor,
  varient = 'default',
}: ISection) => {
  // const router = useRouter();

  const handleNaviation = (e: ButtonEvent, url: string | undefined) => {
    if (!url) return;
    alert(url + ' working....');
    // router.push(url);
    return;
  };

  return (
    <section className={classes['section']}>
      <div className={classes[`container--${varient}`]}>
        <div className={classes['top']}>
          <div className={classes['top__details']}>
            <Typography
              vairent="secondary"
              component="h6"
              color={textColor || 'var(--color-font)'}
              style={{ marginBottom: '1rem' }}
            >
              {heading}
            </Typography>
            <Typography
              vairent="p"
              component="p"
              color={textColor || 'var(--color-font)'}
            >
              {paragraph}
            </Typography>
          </div>
          {buttonOptions && (
            <Button
              varient="text"
              text={buttonOptions?.text}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleNaviation(e, buttonOptions?.url)
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                color: textColor,
              }}
              iconEnd={
                <IconArrow
                  color="currentColor"
                  style={{ marginLeft: '.4rem' }}
                />
              }
              {...buttonOptions}
            ></Button>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
