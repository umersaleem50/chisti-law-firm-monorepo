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
  onClickLeftDot = () => {return},
  onClickRightDot = () => {return},
}: ISliderDots) => {
  const increaseCount = () => {
    onClickRightDot();
  };
  const decreaseCount = () => {
    onClickLeftDot();
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
