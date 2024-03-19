'use client';
import Navbar from '@/Components/Stateful/Navbar/navbar';
import classes from './error.module.scss';
import Typography from '@/Components/Typography/Typography';
import Link from 'next/link';
const ErrorPage = () => {
  return (
    <main className={classes['main']}>
      <Navbar />
      <div className={classes['content']}>
        <Typography vairent="secondary" component="h1">
          Un-Authorized
        </Typography>
        <Typography vairent="p" component="p">
          The content you&apos;re looking for isn&apos;t avialable{' '}
          <Link href={'/'}>Go back to homepage</Link>
        </Typography>
        <Typography vairent="hero" component="h1" color="var(--color-primary)">
          401 Error.
        </Typography>
      </div>
    </main>
  );
};

export default ErrorPage;
