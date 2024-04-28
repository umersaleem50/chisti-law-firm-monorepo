'use client';
import Button from '@/Components/Button/Button';
import Textbox from '@/Components/Inputs/Textbox/Textbox';
import Typography from '@/Components/Typography/Typography';
import classes from './login.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { envConfig } from '@/envConfig';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';
import { enqueueSnackbar, useSnackbar } from 'notistack';
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
  const [jwtCookie, setCookie] = useCookies(['jwt']);
  const router = useRouter();

  const handle_on_submit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        url:
          (envConfig.API_PATH || 'http://localhost:3000/api/v1') +
          '/auth/signin',
        method: 'POST',
        withCredentials: true,
        data: { email, password },
      });

      if (response.status === 200 || response.statusText === 'OK') {
        const token = response?.data?.data?.token;
        setCookie('jwt', token, {
          path: '/admin',
          httpOnly: true,
          secure: true,
          maxAge: 15 * 24 * 60 * 60,
        });
        // alert('Login successful');
        enqueueSnackbar(
          <Typography component="p" vairent="p" color="var(--color-white)">
            Login Successful!
          </Typography>,
          { variant: 'success' }
        );

        router.push('/admin/cases');
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        return enqueueSnackbar(
          <Typography component="p" vairent="p" color="var(--color-white)">
            {error.response.data.message}
          </Typography>,
          { variant: 'error' }
        );
      }
      enqueueSnackbar(
        <Typography component="p" vairent="p" color="var(--color-white)">
          Something went wrong! Try again later.
        </Typography>,
        { variant: 'error' }
      );
    }
  };
  // const handle_submit = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const res = await signIn('credentials', {
  //       email,
  //       password,
  //       // redirect: true,
  //       callbackUrl: '/admin/cases',
  //     });

  //     if (res?.ok) {
  //       alert('Login successful!');
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     // if (res?.error) {
  //     return alert('Invalid email or password.');
  //     // }
  //   }
  // };
  return (
    <CookiesProvider>
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
    </CookiesProvider>
  );
}

export default LoginForm;
