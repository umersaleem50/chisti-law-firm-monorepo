import { Meta, StoryObj } from '@storybook/react';
import { LiaHandshake as IconHand } from 'react-icons/lia';
import Service_Card from './Service_Card';

const meta: Meta<typeof Service_Card> = {
  title: 'Stateless/Service Card',
  component: Service_Card,
};

export default meta;

type Story = StoryObj<typeof Service_Card>;

export const Primary: Story = {
  args: {
    Icon: IconHand,
    title: 'Family Cases',
    url: '/',
  },
};
