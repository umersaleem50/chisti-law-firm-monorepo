import { Meta, StoryObj } from "@storybook/react";

import Profile_Eduction from "./Profile_Education";
import Profile_Education from "./Profile_Education";

const meta: Meta<typeof Profile_Eduction> = {
  title: "Education",
  component: Profile_Education,
};

export default meta;

type Story = StoryObj<typeof Profile_Education>;

export const Primary: Story = {
  args: {
    expirenceArr: [
      {
        course: "LLB 5 Years",
        description:
          "I graducated with 5 years degree of LLB from government college university, Faisalabad.",
        institue: "Government College University, Faisalabad",
        start_date: "02-02-2023",
      },
    ],
  },
};
