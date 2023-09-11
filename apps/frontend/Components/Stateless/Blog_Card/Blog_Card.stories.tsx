import { Meta, StoryObj } from '@storybook/react';
import Blog_Card from './Blog_Card';
const meta: Meta<typeof Blog_Card> = {
  title: 'Stateless/Blog Card',
  component: Blog_Card,
};

export default meta;

type Story = StoryObj<typeof Blog_Card>;

export const Primary: Story = {
  args: {
    alt: 'Blog of criminal Act',
    heading: 'Why you should file for the civil suit?',
    paragraph:
      'We’re offering a ton of services for you. Our lawyers are professionals and have ton of experience in their respected field.',
    isButtonActive: true,
    src: 'blog.jpg',
  },
};
