'use client';

import { header_text } from './text';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Tags, { ITag } from '../Tags/Tags';
import classes from './header.module.scss';
import { handle_scrollTo_event } from '@/utils/handler/bookeEventHandler';
import { useEffect, useState } from 'react';
// import {
//   MouseParallaxContainer,
//   MouseParallaxChild,
// } from "react-parallax-mouse";

import Hero_Container from '@/Components/Layouts/hero_container/hero_container';

/* eslint-disable-next-line */
export interface HeaderProps {}

const tagsArr: ITag[] = [
  { primaryText: 'more than', secondaryText: '+5000 Cases' },
  { primaryText: 'more than', secondaryText: '+1000 Clients' },
  { primaryText: '5+ Years', secondaryText: 'Of Expirence' },
];

export function Header(props: HeaderProps) {
  const [element, setElement] = useState<HTMLElement>();
  const [learnMoreElement, setLearnMoreElement] = useState<HTMLElement>();
  useEffect(() => {
    const appointmentElement = document.getElementById('appointment-id');
    const detailsElementDoc = document.getElementById('services');
    if (appointmentElement) setElement(appointmentElement);
    if (detailsElementDoc) setLearnMoreElement(detailsElementDoc);
  }, [element, learnMoreElement]);
  return (
    <section className={classes['main']}>
      <div className={classes['container']}>
        {/* <Header_Slider /> */}
        <div className={classes['left']}>
          <div className={classes['left__headings']}>
            <Typography vairent="hero" component="h1">
              {header_text['primary']}
            </Typography>
            <Typography vairent="p" component="p">
              {header_text['paragraph']}
            </Typography>
          </div>
          <Typography vairent="p" component="p" style={{ fontWeight: 'bold' }}>
            {header_text['bookappoint']}
          </Typography>

          <div className={classes['left__buttons']}>
            <Button
              varient="primary"
              onClick={() => handle_scrollTo_event(element)}
              style={{ marginRight: '2rem' }}
            >
              Book appointment
            </Button>
            <Button
              varient="text"
              onClick={() => {
                handle_scrollTo_event(learnMoreElement);
              }}
            >
              Learn More
            </Button>
          </div>
          <div className={classes['left__tags']}>{generateTags(tagsArr)}</div>
        </div>
        <div className={classes['right']}>
          <Hero_Container />
        </div>
      </div>
    </section>
  );
}

function generateTags(arrTags: ITag[]) {
  return arrTags.map(({ primaryText, secondaryText }, i) => {
    return (
      <Tags primaryText={primaryText} secondaryText={secondaryText} key={i} />
    );
  });
}

export default Header;
