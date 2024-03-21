import { Meta, StoryObj } from '@storybook/react';
import Filter_Tab from './Filter_Tab';
const meta: Meta<typeof Filter_Tab> = {
  title: 'Stateless/Filter Tab',
  component: Filter_Tab,
};

export default meta;

type Story = StoryObj<typeof Filter_Tab>;

export const Primary: Story = {
  args: {
    data: [
      {
        heading: 'Civil Service',
        options: [
          { text: 'Civil Cases', type: 'button', id: 'civil' },
          { text: 'Criminal Cases', type: 'button', id: 'criminal' },
          { text: 'Family Cases', type: 'checkbox', id: 'family' },
          { text: 'Other Cases', type: 'button', id: 'other' },
        ],
      },
    ],
    activeId: 'civil',
  },
};
