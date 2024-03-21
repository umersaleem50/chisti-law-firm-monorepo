import { Meta, StoryObj } from '@storybook/react';
import Misson, { UIElement } from './Mission';

const meta: Meta<typeof UIElement> = {
  title: 'Layouts/Mission',
  component: Misson,
};

export default meta;

type Story = StoryObj<typeof UIElement>;

export const Primary = () => (
  <UIElement
    src="person.jpg"
    alt="Person"
    reverseElement={true}
    objectFit="cover"
    heading="We Know What is on the line for you  we Can call help"
    paragraph="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame."
    otherOptions={{
      text: 'Learn More',
      type: 'button',
    }}
  />
);
