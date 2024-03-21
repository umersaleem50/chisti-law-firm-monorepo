import { Meta, StoryObj } from '@storybook/react';
import Section from './Section';
const meta: Meta<typeof Section> = {
  title: 'Stateless/Section',
  component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Primary: Story = {
  args: {
    heading: 'Section Heading',
    paragraph: 'Section Paragraph',
    buttonOptions: { text: 'show all', url: '/' },
    textColor: 'var(--color-font)',
  },
};
