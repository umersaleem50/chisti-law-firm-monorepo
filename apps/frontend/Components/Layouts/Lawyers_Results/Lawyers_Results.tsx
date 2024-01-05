import Lawyer_Card from '../../Stateless/Lawyer_Card/Lawyer_Card';
import Typography from '../../Typography/Typography';
import classes from './Lawyers_Results.module.scss';

export interface IServiceResult {
  src: string;
  heading: string;
  description: string;
  dataArr: Array<{ heading: string; paragraph?: string }>;
}

const generateContent = (dataArr: Array<any>) => {
  return dataArr.map((el, i) => {
    return <Lawyer_Card />;
  });
};

const Lawyers_Results = () => {
  return (
    <div className={classes['results']}>
      <div className={classes['results__top']}>
        <Typography vairent="p" component="p" text={`Results:`} />
        <Typography vairent="p" component="p" text={`+10 Results found`} />
      </div>
      <div className={classes['container']}>{generateContent(['0'])}</div>
    </div>
  );
};

export default Lawyers_Results;
