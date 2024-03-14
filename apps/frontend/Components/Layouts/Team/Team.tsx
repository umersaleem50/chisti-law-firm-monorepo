'use client';
import { useEffect, useRef, useState } from 'react';
import Section from '../../Stateless/Section/Section';
import classes from './Team.module.scss';
import Team_Card, { ITeamCard } from '../../Stateless/Team_Card/Team_Card';
import { GenerateUi } from '@/utils/generate-ui/generate-ui';
import Slider_Dots from '../../Stateless/Slider_Dots/Slider_Dots';
import { text } from './text';
import axios from 'axios';
import { NEXT_PUBLIC_API_URL } from '@/config';

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [lawyer, setLaywer] = useState<ITeamCard[]>([
    {
      firstName: 'Mian Shafeeq Chishti',
      lastName: 'Chishti',
      professions: ['Criminal Lawyer', 'Civil Lawyer'],
      profilePicture: 'mian_shafeeq_profile.jpeg',
      _id: '',
    },
  ]);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const [numberOfDots, setNumberOfDots] = useState(1);
  let numberOfCards: number;

  const fetchData = async () => {
    try {
      const response = await axios({
        url: NEXT_PUBLIC_API_URL + '/lawyers',
        method: 'GET',
      });
      if (response.status === 200) {
        setLaywer(response.data.data);
      }
    } catch (error) {
      alert(error);

      setError(true);
    }
  };

  useEffect(() => {
    numberOfCards = getNumberOfitemToDisplay(containerRef, cardRef);
    setNumberOfDots(calculateNumberOfDots());
    fetchData();
  }, []);

  useEffect(() => {
    slideSlider(count);
  }, [count]);

  function calculateNumberOfDots() {
    if (!lawyer.length) return 0;
    if (lawyer.length === 1) return 1;
    const numberOfDots = Math.ceil(lawyer.length + 1 / numberOfCards);

    return numberOfDots;
  }

  function slideSlider(slideNumber: number) {
    if (lawyer.length === 0) return;
    // const containerWidth = containerRef.current?.offsetWidth || 0;
    // const sliderWidth = sliderRef.current?.offsetWidth || 0;
    const cardWidth = cardRef.current?.offsetWidth || 0;
    // const cardMargin = cardRef.current?.style.marginRight || 0;
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
        heading={text['heading']}
        paragraph={text['paragarph']}
        buttonOptions={{
          text: 'Show All',
          url: '/lawyers',
          varient: 'outline',
          style: {
            border: '3px solid var(--color-white)',
            color: 'var(--color-white)',
          },
        }}
        textColor="var(--color-white)"
      >
        <div className={classes['team__container']} ref={containerRef}>
          <aside className={classes['team__slider']} ref={sliderRef}>
            {GenerateUi({
              RenderElement: Team_Card,
              dataArr: lawyer,
              childRef: cardRef,
            })}
          </aside>
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
  const numOfProductToDisplay = Math.floor(
    sliderEl.current.offsetWidth / productEl?.current?.offsetWidth
  );
  return numOfProductToDisplay;
}

export default Team;
