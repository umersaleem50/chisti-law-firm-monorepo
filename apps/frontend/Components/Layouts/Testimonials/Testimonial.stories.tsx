import { Meta, StoryObj } from '@storybook/react';
import Testimonials from './Testimonials';
const meta: Meta<typeof Testimonials> = {
  title: 'Layouts/Testimonials',
  component: Testimonials,
};

export default meta;

type Story = StoryObj<typeof Testimonials>;

export const Primary: Story = {
  args: {},
};
