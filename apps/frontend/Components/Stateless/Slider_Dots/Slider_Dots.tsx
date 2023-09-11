import classes from './Slider_Dots.module.scss';
import {
  IoIosArrowBack as IconBack,
  IoIosArrowForward as IconForward,
} from 'react-icons/io';
export interface ISliderDots {
  count: number;
  setCount: any;
  dotsLength: number;
}

const Slider_Dots = ({ count, setCount, dotsLength }: ISliderDots) => {
  const increaseCount = () => {
    //check if the count on last index
    if (count < dotsLength) return setCount((prev: number) => prev + 1);
    return setCount(1);
  };
  const decreaseCount = () => {
    //check if the count on first index

    if (count > 1) return setCount((prev: number) => prev - 1);
    return setCount(dotsLength);
  };

  const generateDots = (numOfDots: number) => {
    return new Array(numOfDots).fill('dot').map((_, i) => {
      return (
        <div
          className={[
            classes['dot'],
            count === i + 1 ? classes['dot--active'] : '',
          ].join(' ')}
          onClick={() => setCount(i + 1)}
          key={i}
        ></div>
      );
    });
  };
  return (
    <div className={classes['dots']}>
      <IconBack className={classes['icon']} onClick={decreaseCount} />
      {generateDots(dotsLength)}
      <IconForward className={classes['icon']} onClick={increaseCount} />
    </div>
  );
};

export default Slider_Dots;
