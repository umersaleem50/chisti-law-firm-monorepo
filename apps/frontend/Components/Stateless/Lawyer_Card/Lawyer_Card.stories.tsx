import { Meta, StoryObj } from '@storybook/react';
import Lawyer_Card from './Lawyer_Card';
const meta: Meta<typeof Lawyer_Card> = {
  title: 'stateless/Lawyer Card',
  component: Lawyer_Card,
};

export default meta;

type Story = StoryObj<typeof Lawyer_Card>;

export const Primary: Story = {
  args: {},
};
