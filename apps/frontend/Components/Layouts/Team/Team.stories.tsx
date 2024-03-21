import { Meta, StoryObj } from '@storybook/react';
import Team from './Team';
const meta: Meta<typeof Team> = {
  title: 'Layouts/Team',
  component: Team,
};

export default meta;

type Story = StoryObj<typeof Team>;

export const Primary: Story = {
  args: {},
};
