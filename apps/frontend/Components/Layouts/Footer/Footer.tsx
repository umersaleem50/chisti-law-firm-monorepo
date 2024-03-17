import Image from 'next/image';
import Typography from '../../Typography/Typography';
import classes from './Footer.module.scss';
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer className={classes['footer']}>
        <div className={classes['container']}>
          <div className={classes['left']}>
            <Image
              width={100}
              height={80}
              alt="logo"
              src={'/logo-white.png'}
              style={{ objectFit: 'cover' }}
              className={classes['logo']}
            />

            <Typography vairent="p" component="p" color="var(--color-white)">
              Chishti Law Firm is your trusted partner in the pursuit of
              justice. Our dedicated team of experienced lawyers is here to help
              you navigate the legal landscape. Your concerns are ours to
              address, and your success is our mission.
            </Typography>
          </div>
          <div className={classes['right']}>
            <div>
              <Typography
                vairent="p"
                component="p"
                color="var(--color-primary)"
                style={{ marginBottom: '2rem' }}
              >
                Quick Links
              </Typography>
              <Link href={'/blogs'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Blogs
                </Typography>
              </Link>
              <Link href={'/services'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Services
                </Typography>
              </Link>
              <Link href={'/'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Appointments
                </Typography>
              </Link>
              <Link href={'/auth'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Login
                </Typography>
              </Link>
            </div>
            <div>
              <Typography
                vairent="p"
                component="p"
                color="var(--color-primary)"
                style={{ marginBottom: '2rem' }}
              >
                Social Links
              </Typography>
              <Link href={'/'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Facebook
                </Typography>
              </Link>
              <Link href={'/'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Instagram
                </Typography>
              </Link>
              <Link href={'/'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  LinkedIn
                </Typography>
              </Link>
              <Link href={'/'} className={classes['link']}>
                <Typography
                  vairent="p"
                  component="p"
                  color="var(--color-secondary)"
                  style={{ marginBottom: '2rem' }}
                >
                  Youtube
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className={classes['footer__copyright']}>
        <Typography component="p" vairent="p" color="var(--color-font)">
          &copy; All rights are reserved. {new Date().getFullYear()}
        </Typography>
      </div>
    </>
  );
};

export default Footer;
