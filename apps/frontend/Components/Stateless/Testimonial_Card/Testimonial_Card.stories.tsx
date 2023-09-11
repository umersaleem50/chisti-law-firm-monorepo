import { Meta, StoryObj } from '@storybook/react';
import Testimonial_Card from './Testimonial_Card';
const meta: Meta<typeof Testimonial_Card> = {
  title: 'Stateless/Testimonial',
  component: Testimonial_Card,
};

export default meta;

type Story = StoryObj<typeof Testimonial_Card>;

export const Primary: Story = {
  args: {
    personName: 'Bilal Zahid',
    text: '“Working with Mian, Shafeeq Sb. was very great. He’s very corporative & gives very good advice”',
  },
};
