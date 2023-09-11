import { useState } from 'react';
import { HiArrowUpRight as IconArrowUpRight } from 'react-icons/hi2';
import Typography from '../../Typography/Typography';
import classes from './form_appointment.module.scss';
import Textbox from '../../Inputs/Textbox/Textbox';
import Button from '../../Button/Button';
const Form_Appointment = ({ customClasses }: { customClasses?: string[] }) => {
  const [email, setEmail] = useState<string>('');
  return (
    <form className={[classes['form'], customClasses].flat().join(' ')}>
      <div className={classes['form__top']}>
        <Typography
          vairent="secondary"
          component="h6"
          color="var(--color-font)"
        >
          Tell us about your issue.
        </Typography>
        <IconArrowUpRight className={classes['icon']} />
      </div>
      <div className={classes['container']}>
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Firstname"
          placeholder="Enter your firstname"
        />
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Lastname"
          placeholder="Enter your lastname"
        />
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Email"
          placeholder="Enter your email"
        />
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Country"
          placeholder="Enter your country name"
        />
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your City"
          placeholder="Enter your city name"
        />
        <Textbox
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Address"
          placeholder="Enter your address"
        />
        <Textbox
          isField={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Your Address"
          placeholder="Enter your address"
          customClasses={[classes['textarea']]}
        />
        <Button customClasses={[classes['button']]} varient="primary">
          submit
        </Button>
      </div>
    </form>
  );
};

export default Form_Appointment;
