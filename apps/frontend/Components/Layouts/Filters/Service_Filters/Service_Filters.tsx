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
          text: 'Family Cases',
          type: 'button',
          id: 'family-cases',
          onClick: (e) => router.push('/services/family-cases'),
          isActive: usePathname() === '/services/family-cases',
        },
        {
          text: 'Imigration Cases',
          type: 'button',
          id: 'imigration-cases',
          onClick: (e) => router.push('/services/imigration-cases'),
          isActive: usePathname() === '/services/imigration-cases',
        },
        {
          text: 'Trademark & Copyrights',
          type: 'button',
          id: 'trademark-and-copyright',
          onClick: (e) => router.push('/services/trademark-and-copyright'),
          isActive: usePathname() === '/services/trademark-and-copyright',
        },
      ],
    },
    {
      heading: 'Criminal Cases',
      options: [
        {
          text: 'Criminal Cases',
          type: 'button',
          id: 'criminal-cases',
          isActive: usePathname() === '/services/criminal-cases',
          onClick: (e) => router.push('/services/criminal-cases'),
        },
        {
          text: 'FIA Cases',
          type: 'button',
          id: 'fia-cases',
          isActive: usePathname() === '/services/fia-cases',
          onClick: (e) => router.push('/services/fia-cases'),
        },
        {
          text: 'Murder Cases',
          type: 'button',
          id: '302-criminal',
          isActive: usePathname() === '/services/302-criminal',
          onClick: (e) => router.push('/services/302-criminal'),
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
