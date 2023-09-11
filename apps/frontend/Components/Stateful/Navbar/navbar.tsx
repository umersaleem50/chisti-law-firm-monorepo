'use client';
import Image from 'next/image';
import classes from './navbar.module.scss';
import Link from 'next/link';
import Button from '../../Button/Button';
type navlinks = {
  name: string;
  url: string;
};

export const NAV_LINKS: navlinks[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Service',
    url: '/services',
  },
  {
    name: 'Case Management',
    url: '/',
  },
  {
    name: 'Blogs',
    url: '/blogs',
  },
  {
    name: 'All Lawyers',
    url: '/lawyers',
  },
];

const generateLinks = (arr: navlinks[]) => {
  return arr.map(({ url, name }, i: number) => {
    return (
      <li key={i}>
        <Link href={url} legacyBehavior>
          <a className={classes['nav__link']}>{name}</a>
        </Link>
      </li>
    );
  });
};
const Navbar = () => {
  return (
    <div className={classes['navbar']}>
      <div className={classes['container']}>
        <Image
          width={50}
          height={60}
          alt="logo"
          src={'/assets/logo.png'}
          style={{ objectFit: 'cover' }}
        />
        <nav>
          <ul className={classes['nav']}>{generateLinks(NAV_LINKS)}</ul>
        </nav>
        <div className={classes['container__buttons']}>
          <Button
            varient="primary"
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{ marginRight: '3rem' }}
          >
            Book Appointment
          </Button>
          <Button
            varient="outline"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
