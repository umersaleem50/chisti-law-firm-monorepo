import { Meta, StoryObj } from '@storybook/react';
import Select_Input from './Select_Input';
const meta: Meta<typeof Select_Input> = {
  title: 'Inputs/Select',
  component: Select_Input,
};

export default meta;

type Story = StoryObj<typeof Select_Input>;

export const Primary: Story = {
  args: {
    selected: 'pakistan',
    options: [
      { text: 'china', value: 'china' },
      { text: 'America', value: 'america' },
      { text: 'Pakistan', value: 'pakistan' },
      { text: 'Germany', value: 'germany' },
    ],
  },
};
