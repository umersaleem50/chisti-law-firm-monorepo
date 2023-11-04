'use client';
import Button from '../../Button/Button';
import Select_Input from '../../Inputs/Select/Select_Input';
import Typography from '../../Typography/Typography';
import classes from './Finder.module.scss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { finder_options, finder_text } from './text';
const Finder = () => {
  return (
    <div className={classes['finder']}>
      <div className={classes['container']}>
        <div className={classes['container__details']}>
          <Typography
            vairent="secondary"
            component="p"
            color="var(--color-white)"
            style={{ marginBottom: '1rem' }}
          >
            {finder_text['secondary']}
          </Typography>
          <Typography vairent="p" component="p" color="var(--color-white)">
            {finder_text['paragraph']}
          </Typography>
        </div>
        <div className={classes['container__finder']}>
          <Select_Input options={finder_options} />
          <Button
            varient="primary"
            text="Find A Lawyer"
            onClick={() => {}}
            customClasses={[classes['button']]}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Finder;
