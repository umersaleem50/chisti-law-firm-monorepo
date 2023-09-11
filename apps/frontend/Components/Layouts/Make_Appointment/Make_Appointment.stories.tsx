import { Meta, StoryObj } from '@storybook/react';
import Make_Appointment from './Make_Appointment';
const meta: Meta<typeof Make_Appointment> = {
  title: 'Layouts/Make Appointment',
  component: Make_Appointment,
};

export default meta;

type Story = StoryObj<typeof Make_Appointment>;

export const Primary: Story = {
  args: {},
};
