import { Meta, StoryObj } from "@storybook/react";
import Team_Card_Component from "./Team_Card";
const meta: Meta<typeof Team_Card_Component> = {
  title: "Stateless/Team Card",
  component: Team_Card_Component,
};

export default meta;

type Story = StoryObj<typeof Team_Card_Component>;

export const Primary: Story = {
  args: {
    firstName: "Bilal",
    lastName: "Zahid",
    professions: ["Civil Lawyer", "Criminal Lawyer"],
    profilePicture: "bilalzahid.jpg",
  },
};
