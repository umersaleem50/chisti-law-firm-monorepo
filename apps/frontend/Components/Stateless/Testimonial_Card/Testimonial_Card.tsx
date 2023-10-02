import { forwardRef } from 'react';
import Typography from '../../Typography/Typography';
import classes from './Testimonial_Card.module.scss';

export interface ITestimonialCard {
  text: string;
  personName: string;
  isActive?: boolean;
}

const Testimonial_Card = (
  { text, personName, isActive = false }: ITestimonialCard,
  childRef: any
) => {
  return (
    <figure
      className={[
        classes['card'],
        isActive ? classes['card--active'] : '',
      ].join('  ')}
      ref={childRef}
    >
      <figcaption>
        <Typography vairent="p" component="p">
          {text}
        </Typography>
      </figcaption>
      <div className={classes['card__bottom']}>
        <Typography
          vairent="hero"
          component="h6"
          color="var(--color-secondary)"
          customClasses={[classes['card__qoute']]}
        >
          “
        </Typography>
        <figcaption>
          <Typography vairent="p" component="p">
            {personName}
          </Typography>
        </figcaption>
      </div>
    </figure>
  );
};

export default forwardRef(Testimonial_Card);
