import { Meta, StoryObj } from '@storybook/react';
import Services from './Services';
const meta: Meta<typeof Services> = {
  title: 'Layouts/Services',
  component: Services,
};

export default meta;

type Story = StoryObj<typeof Services>;

export const Primary: Story = {
  args: {},
};
