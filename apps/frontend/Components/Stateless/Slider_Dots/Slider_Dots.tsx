import classes from './Slider_Dots.module.scss';
import {
  IoIosArrowBack as IconBack,
  IoIosArrowForward as IconForward,
} from 'react-icons/io';
export interface ISliderDots {
  count: number;
  setCount: any;
  dotsLength: number;
  onClickLeftDot?: () => void;
  onClickRightDot?: () => void;
}

const Slider_Dots = ({
  count,
  setCount,
  dotsLength,
  onClickLeftDot = () => {},
  onClickRightDot = () => {},
}: ISliderDots) => {
  const increaseCount = () => {
    //check if the count on last index
    onClickRightDot();
    // if (count <= dotsLength) {
    //   return setCount(0);
    // }
    // return setCount((prev: number) => prev + 1);
  };
  const decreaseCount = () => {
    //check if the count on first index
    onClickLeftDot();
    // if (count === 0) return setCount(dotsLength);
    // return setCount((prev: number) => prev - 1);
  };

  const generateDots = (numOfDots: number) => {
    return new Array(numOfDots).fill('dot').map((_, i) => {
      return (
        <div
          className={[
            classes['dot'],
            count === i ? classes['dot--active'] : '',
          ].join(' ')}
          onClick={() => setCount(i)}
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
