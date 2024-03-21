import Navbar from '@/Components/Stateful/Navbar/navbar';
import classes from './page.module.scss';
import Typography from '@/Components/Typography/Typography';
import Link from 'next/link';
const ErrorPage = () => {
  return (
    <main className={classes['main']}>
      <Navbar />
      <div className={classes['content']}>
        <Typography vairent="secondary" component="h1">
          Private Route
        </Typography>
        <Typography vairent="p" component="p">
          Please login to access this route. visit{' '}
          <Link href={'/auth'}>Here to login</Link>
        </Typography>
        <Typography vairent="hero" component="h1" color="var(--color-primary)">
          401 Error.
        </Typography>
      </div>
    </main>
  );
};

export default ErrorPage;
