import { Meta, StoryObj } from '@storybook/react';
import Form_Appointment from './form_appointment';
const meta: Meta<typeof Form_Appointment> = {
  title: 'Forms/Appointment',
  component: Form_Appointment,
};

export default meta;

type Story = StoryObj<typeof Form_Appointment>;

export const Primary: Story = {
  args: {},
};
