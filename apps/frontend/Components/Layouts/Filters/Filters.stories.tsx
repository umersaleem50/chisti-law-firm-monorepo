import { Meta, StoryObj } from '@storybook/react';
import Filters from './Filters';
const meta: Meta<typeof Filters> = {
  title: 'Layouts/Filters',
  component: Filters,
};

export default meta;

type Story = StoryObj<typeof Filters>;

const testDataArr = [{}];

export const Services: Story = {
  args: {
    data: [
      {
        heading: 'Civil Cases',
        options: [
          { text: 'Civil Cases', type: 'button', id: 'civil' },
          { text: 'Criminal Cases', type: 'button', id: 'criminal' },
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
    ],
    activeId: 'civil',
  },
};
export const Team: Story = {
  args: {
    data: [
      {
        heading: 'Filters:',
        options: [
          { text: 'By Profession:', type: 'text', id: 'text-profession' },
          { text: 'Civil Lawyers', type: 'checkbox', id: 'civil' },
          { text: 'Criminal Lawyers', type: 'checkbox', id: 'criminal' },
          { text: 'Cyber Lawyers', type: 'checkbox', id: 'cyber' },
          { text: 'Taxation Lawyers', type: 'checkbox', id: 'tax' },
          { text: 'By Expirence:', type: 'text', id: 'text-expirence' },
          { text: '+3 Years', type: 'checkbox', id: '3+' },
          { text: '+5 Years', type: 'checkbox', id: '5+' },
          { text: '+10 Years', type: 'checkbox', id: '10+' },
        ],
      },
    ],
    activeId: 'civil',
  },
};
