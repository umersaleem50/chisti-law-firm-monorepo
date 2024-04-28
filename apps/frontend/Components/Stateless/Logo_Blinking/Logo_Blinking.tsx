import Image from 'next/image';
import classes from './Logo_Blinking.module.scss';

const Logo_Blinking = () => {
  return (
    <figure className={classes['container']}>
      <Image
        src={'/logo-bg.png'}
        fill
        alt="Logo"
        style={{ objectFit: 'contain' }}
      />
    </figure>
  );
};

export default Logo_Blinking;
