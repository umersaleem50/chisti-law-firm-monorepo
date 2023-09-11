import { Meta, StoryObj } from '@storybook/react';
import Finder from './Finder';
const meta: Meta<typeof Finder> = {
  title: 'Stateless/Finder',
  component: Finder,
};

export default meta;

type Story = StoryObj<typeof Finder>;

export const Primary: Story = {
  args: {},
};
