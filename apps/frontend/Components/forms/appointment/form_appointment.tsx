import { useState } from 'react';
import { HiArrowUpRight as IconArrowUpRight } from 'react-icons/hi2';
import Typography from '../../Typography/Typography';
import classes from './form_appointment.module.scss';
import Textbox from '../../Inputs/Textbox/Textbox';
import Button from '../../Button/Button';
const Form_Appointment = ({ customClasses }: { customClasses?: string[] }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const submitForm = (e: any) => {
    e.preventDefault();
    alert('Thanks for submitting your request.');
  };
  return (
    <form
      className={[classes['form'], customClasses].flat().join(' ')}
      onSubmit={submitForm}
    >
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="Your Firstname"
          placeholder="Enter your firstname"
        />
        <Textbox
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Your Country"
          placeholder="Enter your country name"
        />
        <Textbox
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="Your City"
          placeholder="Enter your city name"
        />
        <Textbox
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          label="Your Address"
          placeholder="Enter your address"
        />
        <Textbox
          isField={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Subject Matter"
          placeholder="Explain Subject Matter"
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
