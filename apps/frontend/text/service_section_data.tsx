'use client';
import Router from 'next/router';

import { IFilter } from '../Components/Stateless/Filter_Tab/Filter_Tab';

export const filterData: IFilter[] = [
  {
    heading: 'Civil Cases',
    options: [
      {
        text: 'Civil Cases',
        type: 'button',
        id: 'civil',
        onClick: (e) => Router.push('/services/civil'),
      },
      {
        text: 'Criminal Cases',
        type: 'button',
        id: 'criminal',
        onClick: (e) => Router.push('/services/criminal'),
      },
      { text: 'Family Cases', type: 'button', id: 'family' },
      { text: 'Other Cases', type: 'button', id: 'other-civil' },
    ],
  },
  {
    heading: 'Criminal Cases',
    options: [
      { text: 'FIA Cases', type: 'button', id: 'fia' },
      { text: '302 Cases', type: 'button', id: 'murder' },
      { text: 'Harasment Cases', type: 'button', id: 'harasment' },
      { text: 'Other Criminal Case', type: 'button', id: 'other-criminal' },
    ],
  },
  {
    heading: 'Family Cases',
    options: [
      { text: 'Divorce Cases', type: 'button', id: 'divorce' },
      { text: 'Marriage Cases', type: 'button', id: 'marriage' },
      { text: 'Dowry Cases', type: 'button', id: 'dowry' },
      { text: 'Other Family Cases', type: 'button', id: 'other-family' },
    ],
  },
];
