import Typography from '../../Typography/Typography';
import classes from './Testimonial_Card.module.scss';

export interface ITestimonialCard {
  text: string;
  personName: string;
  isActive?: boolean;
}

const Testimonial_Card = ({
  text,
  personName,
  isActive = false,
}: ITestimonialCard) => {
  return (
    <figure
      className={[
        classes['card'],
        isActive ? classes['card--active'] : '',
      ].join('  ')}
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

export default Testimonial_Card;
