import Image from 'next/image';
import Typography from '../../Typography/Typography';
import classes from './Lawyer_Card.module.scss';
const Lawyer_Card = () => {
  return (
    <figure className={classes['card']}>
      <div className={classes['card__image']}>
        <Image
          src={'/assets/homepage/person.jpg'}
          alt="profile-picture"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <Typography
          vairent="secondary"
          component="h6"
          style={{ fontWeight: 'bold', marginBottom: '1rem' }}
        >
          Advocate, Amina
        </Typography>
        <Typography vairent="h5" component="h6">
          Criminal Lawyer, Civil Lawyer
        </Typography>
        <Typography
          vairent="p"
          component="p"
          color="var(--color-primary)"
          customClasses={[classes['heading--work']]}
        >
          Working at High Court, Lahore
        </Typography>
        <Typography
          vairent="p"
          component="p"
          style={{ fontWeight: 'bold', marginTop: 'auto' }}
          color="var(--color-accent)"
        >
          +3 Years of Expirence
        </Typography>
      </div>
    </figure>
  );
};
export default Lawyer_Card;
