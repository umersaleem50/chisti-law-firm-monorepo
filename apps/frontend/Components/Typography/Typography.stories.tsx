import Typography from './Typography';

export default {
  title: 'Inputs/Typography',
  component: Typography,
};

export const Hero = () => (
  <Typography vairent="hero" component="h1">
    Hero Heading
  </Typography>
);
export const Paragarph = () => (
  <Typography vairent="p" component="p">
    Paragarph
  </Typography>
);

export const Secondary = () => (
  <Typography vairent="secondary" component="p">
    Secondary Heading
  </Typography>
);
