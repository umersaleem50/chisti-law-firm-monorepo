import { Meta, StoryObj } from '@storybook/react';
import Slider_Dots from './Slider_Dots';
const meta: Meta<typeof Slider_Dots> = {
  title: 'Stateless/Dots',
  component: Slider_Dots,
};

export default meta;

type Story = StoryObj<typeof Slider_Dots>;

export const Primary: Story = {
  args: {
    count: 1,
    setCount(x) {
      return 2;
    },
    dotsLength: 4,
  },
};
