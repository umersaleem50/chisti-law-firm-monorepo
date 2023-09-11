import { Meta, StoryObj } from '@storybook/react';
import Blogs from './Blogs';
const meta: Meta<typeof Blogs> = {
  title: 'Layouts/Blogs',
  component: Blogs,
};

export default meta;

type Story = StoryObj<typeof Blogs>;

export const Primary: Story = {
  args: {},
};
