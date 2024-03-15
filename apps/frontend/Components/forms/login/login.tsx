'use client';
import Button from '@/Components/Button/Button';
import Textbox from '@/Components/Inputs/Textbox/Textbox';
import Typography from '@/Components/Typography/Typography';
import classes from './login.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export interface ILoginForm {
  email: string;
  password: string;
  onEmailChange: any;
  onPasswordChange: any;
  onSubmit: any;
}
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handle_on_submit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        url:
          (process.env.NEXT_PUBLIC_API_PATH || 'http://localhost:3000/api/v1') +
          '/auth/signin',
        method: 'POST',
        withCredentials: true,
        data: { email, password },
      });

      if (response.status === 200 || response.statusText === 'OK') {
        alert('Login successful');
        router.push('/admin/appointments');
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        return alert(error.response.data?.message);
      }
      alert('Something went wrong!');
    }
  };
  return (
    <form className={classes['form']} onSubmit={handle_on_submit}>
      <div className={classes['form__typo']}>
        <Typography
          vairent="secondary"
          component="h5"
          color="var(--color-font)"
        >
          Login to your workspace
        </Typography>
        <Typography vairent="p" component="p" color="var(--color-grey-3)">
          Login to your workspace to unlock new features.
        </Typography>
      </div>
      <Textbox
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter you email"
        type="email"
        label="Email"
      />
      <Textbox
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter you password"
        type="password"
        label="Password"
      />
      <Button
        varient="fullwidth"
        type="submit"
        isActive
        style={{ marginTop: '2rem', textAlign: 'center' }}
        customClasses={[classes['btn--login']]}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
