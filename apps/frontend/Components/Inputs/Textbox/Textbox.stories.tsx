import { Meta, StoryObj } from '@storybook/react';
import Textbox from './Textbox';
const meta: Meta<typeof Textbox> = {
  title: 'Inputs/Textbox',
  component: Textbox,
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Input: Story = {
  args: {
    label: 'test label',
    value: '',
    placeholder: 'please start typing',
    type: 'text',
    required: true,
  },
};

export const TextArea: Story = {
  args: {
    label: 'test label',
    value: '',
    placeholder: 'enter value here',
    isField: true,
  },
};
