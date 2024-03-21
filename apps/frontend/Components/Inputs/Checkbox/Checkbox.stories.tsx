import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: { text: 'Check this', id: 'criminal', isChecked: true },
};
