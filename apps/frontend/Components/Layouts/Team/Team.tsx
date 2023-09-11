'use client';
import { useRef, useState } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { team_raw_data } from 'apps/frontend/text/sections_raw_data';
import Section from '../../Stateless/Section/Section';
import classes from './Team.module.scss';
import Team_Card, { ITeamCard } from '../../Stateless/Team_Card/Team_Card';
import { GenerateUi } from '@law-firm/generate-ui';
import Slider_Dots from '../../Stateless/Slider_Dots/Slider_Dots';

const temp_data_arr: ITeamCard[] = [
  {
    personName: 'Adv. Bilal Zahid',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Aqib Shahid',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Amir iqbal',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
  {
    personName: 'Adv. Danish Sohail',
    professions: ['Criminal Lawyer', 'Civil Lawyer'],
    src: 'bilalzahid.jpg',
  },
];

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);
  function move_slider() {
    const cardMargin: any = cardRef.current?.offsetLeft;
    containerRef.current?.style.setProperty(
      'transform',
      `translateX(-${
        ((cardRef.current?.offsetWidth || 0) + 6) * count +
        (cardMargin / 2) * count
      }px)`
    );
    setCount((prev) => prev + 1);
    alert(
      ((cardRef.current?.offsetWidth || 0) + 6) * count +
        (cardMargin / 2) * count
    );
  }
  // useEffect(() => {});

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
        <div className={classes['team__container']}>
          <div className={classes['team__slider']} ref={containerRef}>
            {GenerateUi({
              RenderElement: Team_Card,
              dataArr: temp_data_arr,
              childRef: cardRef,
            })}
          </div>
          <Slider_Dots
            count={count}
            setCount={setCount}
            dotsLength={temp_data_arr.length}
          />
        </div>
      </Section>
    </div>
  );
};
export default Team;
