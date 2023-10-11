import Typography from '../../Typography/Typography';
import classes from './Services_results.module.scss';

import Image from 'next/image';

export interface IServiceResult {
  src: string;
  heading: string;
  description: string;
  dataArr: Array<{ heading: string; paragraph: string }>;
}

const generateContent = (
  dataArr: Array<{ heading: string; paragraph: string }>
) => {
  return dataArr.map((el, i) => {
    return (
      <div className={classes['container']} key={i}>
        <Typography
          component="h5"
          vairent="h5"
          customClasses={[classes['heading--secondary']]}
          style={{ fontWeight: '500' }}
        >
          {el.heading}
        </Typography>
        <Typography
          component="p"
          vairent="p"
          customClasses={[classes['text--paragraph']]}
        >
          {el.paragraph}
        </Typography>
      </div>
    );
  });
};

const Service_Results = ({
  src,
  heading,
  description,
  dataArr,
}: IServiceResult) => {
  return (
    <div className={classes['results']}>
      <div className={classes['results__image']}>
        <Image fill src={src} style={{ objectFit: 'cover' }} alt={src} />
      </div>
      <Typography
        vairent="secondary"
        component="h5"
        customClasses={[classes['heading--main']]}
      >
        {heading}
      </Typography>
      <Typography
        vairent="p"
        component="p"
        customClasses={[classes['text--description']]}
      >
        {description}
      </Typography>
      {generateContent(dataArr)}
    </div>
  );
};

export default Service_Results;
