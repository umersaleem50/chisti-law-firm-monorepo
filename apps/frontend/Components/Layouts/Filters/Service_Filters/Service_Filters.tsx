'use client';
import { useState } from 'react';
import Image from 'next/image';
import Filter_Tab from '../../../Stateless/Filter_Tab/Filter_Tab';
import classes from './Service_Filters.module.scss';
import { IFilter } from '../../../../Components/Stateless/Filter_Tab/Filter_Tab';
// import { filterData } from '../../../../text/service_section_data';
import Typography from '../../../../Components/Typography/Typography';
import Router, { useRouter, usePathname } from 'next/navigation';

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

  const router = useRouter();

  const filterData: IFilter[] = [
    {
      heading: 'Civil Cases',
      options: [
        {
          text: 'Civil Cases',
          type: 'button',
          id: 'civil',
          onClick: (e) => router.push('/services/civil'),
          isActive: usePathname() === '/services/civil',
        },
        {
          text: 'Criminal Cases',
          type: 'button',
          id: 'criminal',
          onClick: (e) => router.push('/services/criminal'),
          isActive: usePathname() === '/services/criminal',
        },
        {
          text: 'Family Cases',
          type: 'button',
          id: 'family',
          onClick: (e) => router.push('/services/family'),
        },
        {
          text: 'Other Cases',
          type: 'button',
          id: 'other-civil',
          isActive: usePathname() === '/services/other-civil',
          onClick: (e) => router.push('/services/other-civil'),
        },
      ],
    },
    {
      heading: 'Criminal Cases',
      options: [
        {
          text: 'FIA Cases',
          type: 'button',
          id: 'fia',
          isActive: usePathname() === '/services/fia',
          onClick: (e) => router.push('/services/fia'),
        },
        {
          text: '302 Cases',
          type: 'button',
          id: 'murder',
          isActive: usePathname() === '/services/302-case',
          onClick: (e) => router.push('/services/302-case'),
        },
        {
          text: 'Harasment Cases',
          type: 'button',
          id: 'harasment',
          isActive: usePathname() === '/services/harasment',
          onClick: (e) => router.push('/services/harasment'),
        },
        {
          text: 'Other Criminal Case',
          type: 'button',
          id: 'other-criminal',
          isActive: usePathname() === '/services/other-criminal',
          onClick: (e) => router.push('/services/other-criminal'),
        },
      ],
    },
    {
      heading: 'Family Cases',
      options: [
        {
          text: 'Divorce Cases',
          type: 'button',
          id: 'divorce',
          isActive: usePathname() === '/services/divorce',
          onClick: (e) => router.push('/services/divorce'),
        },
        {
          text: 'Marriage Cases',
          type: 'button',
          id: 'marriage',
          isActive: usePathname() === '/services/marriage',
          onClick: (e) => router.push('/services/marriage'),
        },
        {
          text: 'Dowry Cases',
          type: 'button',
          id: 'dowry',
          isActive: usePathname() === '/services/dowry',
          onClick: (e) => router.push('/services/dowry'),
        },
        {
          text: 'Other Family Cases',
          type: 'button',
          id: 'other-family',
          isActive: usePathname() === '/services/other-family',
          onClick: (e) => router.push('/services/other-family'),
        },
      ],
    },
  ];

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
      <Filter_Tab data={filterData} />
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
