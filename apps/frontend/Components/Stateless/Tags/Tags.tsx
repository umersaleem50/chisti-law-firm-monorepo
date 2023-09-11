import Typography from '../../Typography/Typography';
import classes from './Tags.module.scss';

export type ITag = {
  primaryText: string;
  secondaryText: string;
};

const Tags = ({ primaryText, secondaryText }: ITag) => {
  return (
    <div className={classes['tags']}>
      <Typography vairent="p" component="p">
        {primaryText}
      </Typography>
      <Typography vairent="secondary" component="p">
        {secondaryText}
      </Typography>
    </div>
  );
};

export default Tags;
