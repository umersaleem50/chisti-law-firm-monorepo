import Button from './Button';

export default {
  title: 'Inputs/Button',
  component: Button,
};

export const Primary = () => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Button varient="primary" onClick={() => {}}>
    Book appointment
  </Button>
);

export const Outline = () => (
  <Button varient="outline" onClick={() => {}}>
    Button
  </Button>
);
