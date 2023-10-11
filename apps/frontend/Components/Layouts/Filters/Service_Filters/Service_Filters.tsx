'use client';
import Filter_Tab from '../../../Stateless/Filter_Tab/Filter_Tab';
import classes from './Service_Filters.module.scss';
import { IFilter } from '../../../../Components/Stateless/Filter_Tab/Filter_Tab';
// import { filterData } from '../../../../text/service_section_data';

import { useRouter, usePathname } from 'next/navigation';

const Service_Filters = ({ children }: { children: any }) => {
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

  return (
    <div className={classes['filters']}>
      <Filter_Tab data={filterData} />
      {children}
    </div>
  );
};

export default Service_Filters;
