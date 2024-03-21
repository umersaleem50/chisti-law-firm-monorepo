import classes from './not-found.module.scss';
import Typography from '@/Components/Typography/Typography';
import Link from 'next/link';
import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';
const NotFoundPage = () => {
  return (
    <main className={classes['main']}>
      <NavbarComponent />
      <div className={classes['content']}>
        <Typography vairent="secondary" component="h1">
          Not Found
        </Typography>
        <Typography vairent="p" component="p">
          The content you&apos;re looking for isn&apos;t avialable{' '}
          <Link href={'/'}>Go back to homepage</Link>
        </Typography>
        <Typography vairent="hero" component="h1" color="var(--color-primary)">
          404 Error.
        </Typography>
      </div>
    </main>
  );
};

export default NotFoundPage;
