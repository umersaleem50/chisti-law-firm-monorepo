import Image from 'next/image';
import classes from './hero_container.module.scss';

function Hero_Container() {
  return (
    <div className={classes['container']}>
      <Image
        src={'/assets/sir-image-text.png'}
        alt="Adv. Mian Shafeeq Chishti (CEO of firm)"
        fill
        // style={}
        className={classes['container__image']}
      />
    </div>
  );
}

export default Hero_Container;
