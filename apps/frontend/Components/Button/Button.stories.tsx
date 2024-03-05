import Button, { Back_to_Home_Button } from "./Button";

export default {
  title: "Inputs/Button",
  component: Button,
};

export const Primary = () => (
  <Button varient="primary" onClick={() => {}}>
    Book appointment
  </Button>
);

export const Outline = () => (
  <Button varient="outline" onClick={() => {}}>
    Button
  </Button>
);

export const FullWidth = () => (
  <Button varient="fullwidth" onClick={() => {}}>
    Full Width
  </Button>
);

export const BtnHomepage = () => <Back_to_Home_Button />;
