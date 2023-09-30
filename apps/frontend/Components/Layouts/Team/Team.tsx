'use client';
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { team_raw_data } from 'apps/frontend/text/sections_raw_data';
import Section from '../../Stateless/Section/Section';
import classes from './Team.module.scss';
import Team_Card, { ITeamCard } from '../../Stateless/Team_Card/Team_Card';
import { GenerateUi } from '@law-firm/generate-ui';
import Slider_Dots from '../../Stateless/Slider_Dots/Slider_Dots';

const temp_data_arr: ITeamCard[] = [
  {
    personName: 'Adv. Bilal Zahid 1',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Aqib Shahid 2',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Amir iqbal 3',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Danish Sohail 4',
    professions: ['Criminal Lawyer', 'Civil Lawyer 4'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Danish Sohail 5',
    professions: ['Criminal Lawyer', 'Civil Lawyer 5'],
    src: 'bilalzahid.jpg',
  },
];

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [numberOfDots, setNumberOfDots] = useState(1);
  let numberOfCards: number;

  useEffect(() => {
    numberOfCards = getNumberOfitemToDisplay(containerRef, cardRef);
    setNumberOfDots(calculateNumberOfDots());
  }, []);

  useEffect(() => {
    slideSlider(count);
    console.log(count);
  }, [count]);

  function calculateNumberOfDots() {
    return Math.ceil(temp_data_arr.length / numberOfCards);
  }

  function slideSlider(slideNumber: number) {
    if (temp_data_arr.length === 0) return;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const sliderWidth = sliderRef.current?.offsetWidth || 0;
    const cardWidth = cardRef.current?.offsetWidth || 0;
    const cardMargin = cardRef.current?.style.marginRight || 0;
    const numberOfCardToMove = getNumberOfitemToDisplay(containerRef, cardRef);

    const valueOfTranslateX =
      cardWidth * (slideNumber * numberOfCardToMove) + (30 * slideNumber - 1);

    // if (containerWidth < sliderWidth) return;

    sliderRef.current?.style.setProperty(
      'transform',
      `translateX(-${Math.abs(valueOfTranslateX)}px)`
    );
  }

  function move_slider_right() {
    // slideSlider(count + 1);
    if (count >= numberOfDots - 1) return setCount(0);
    return setCount((prev) => prev + 1);
  }

  function move_slider_left() {
    if (count <= 0) return setCount(numberOfDots - 1);
    return setCount((prev) => prev - 1);
  }

  return (
    <div className={classes['team']}>
      <Section
        heading={team_raw_data.heading}
        paragraph={team_raw_data.paragarph}
        buttonOptions={{
          text: 'Show All',
          url: '/team',
          varient: 'outline',
          style: {
            border: '3px solid var(--color-white)',
            color: 'var(--color-white)',
          },
        }}
        textColor="var(--color-white)"
      >
        <div className={classes['team__container']} ref={containerRef}>
          <div className={classes['team__slider']} ref={sliderRef}>
            {GenerateUi({
              RenderElement: Team_Card,
              dataArr: temp_data_arr,
              childRef: cardRef,
            })}
          </div>
        </div>
        <Slider_Dots
          count={count}
          setCount={setCount}
          dotsLength={numberOfDots}
          onClickRightDot={move_slider_right}
          onClickLeftDot={move_slider_left}
        />
      </Section>
    </div>
  );
};

function getNumberOfitemToDisplay(sliderEl: any, productEl: any) {
  console.log(sliderEl.current);

  const numOfProductToDisplay = Math.floor(
    sliderEl.current.offsetWidth / productEl.current.offsetWidth
  );
  return numOfProductToDisplay;
}

export default Team;
