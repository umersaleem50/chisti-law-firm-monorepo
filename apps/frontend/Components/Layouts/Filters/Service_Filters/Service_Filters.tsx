'use client';
import { useState } from 'react';
import Image from 'next/image';
import Filter_Tab from '../../../Stateless/Filter_Tab/Filter_Tab';
import classes from './Service_Filters.module.scss';
import { filterData } from 'apps/frontend/text/service_section_data';
import Typography from 'apps/frontend/Components/Typography/Typography';

const testDataArr = [
  {
    heading: 'testing heading',
    paragraph:
      'The Civil Service is an integral and key part of the government of the United Kingdom. It supports the government of the day in developing and implementing its policies, and in delivering public services. Civil servants are accountable to ministers, who in turn are accountable to Parliament.',
  },
  {
    heading: 'testing heading',
    paragraph:
      'The Civil Service is an integral and key part of the government of the United Kingdom. It supports the government of the day in developing and implementing its policies, and in delivering public services. Civil servants are accountable to ministers, who in turn are accountable to Parliament.',
  },
  {
    heading: 'testing heading',
    paragraph:
      'The Civil Service is an integral and key part of the government of the United Kingdom. It supports the government of the day in developing and implementing its policies, and in delivering public services. Civil servants are accountable to ministers, who in turn are accountable to Parliament.',
  },
];

const Service_Filters = () => {
  const src = `/assets/homepage/person.jpg`;
  const [heading, setHeading] = useState('testing heading');
  const [description, setDescription] = useState(
    'The Civil Service is an integral and key part of the government of the United Kingdom. It supports the government of the day in developing and implementing its policies, and in delivering public services. Civil servants are accountable to ministers, who in turn are accountable to Parliament.'
  );

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

  return (
    <div className={classes['filters']}>
      <Filter_Tab data={filterData} activeId={'criminal'} />
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
        {generateContent(testDataArr)}
      </div>
    </div>
  );
};

export default Service_Filters;
