'use client';
import Image from 'next/image';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import classes from './header_slider.module.scss';

const Header_Slider = () => {
  return (
    <div className={classes['container']}>
      <MouseParallaxContainer>
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.04}
          className={classes['container__element']}
        >
          <Image
            src={'/assets/background.png'}
            // width={900}
            // height={1000}
            fill
            alt="background"
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.01}
          factorY={0.02}
          className={classes['container__element']}
        >
          <div>
            <Image
              src={'/assets/sir.png'}
              //   width={900}
              //   height={1000}
              fill
              alt="sir"
            />
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
};

export default Header_Slider;
