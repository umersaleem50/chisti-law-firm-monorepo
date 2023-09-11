'use client';
import { FiArrowUpRight as IconArrow } from 'react-icons/fi';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';

import classes from './Service_Casd.module.scss';

export interface IServiceCard {
  Icon: any;
  title: string;
  url: string;
}

const Service_Card = ({ Icon, title, url }: IServiceCard) => {
  return (
    <div className={classes['service']}>
      <Icon color={'var(--color-accent)'} fontSize={'3.5rem'} />
      <div className={classes['service__details']}>
        <Typography vairent="p" component="p" color="var(--font-color)">
          {title}
        </Typography>
        <Button
          varient="text"
          onClick={() => {
            alert('please add code in 21:service_card');
          }}
        >
          <IconArrow
            color="var(--color-font)"
            fontSize={'2rem'}
            style={{ transform: 'translate(1rem,1.3rem)' }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Service_Card;
