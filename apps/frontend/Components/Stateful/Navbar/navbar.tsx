'use client';
import Image from 'next/image';
import classes from './navbar.module.scss';
import Link from 'next/link';
import Button from '../../Button/Button';
import { handle_appointment_event } from '@handler/book-appointment-handler';
import { useEffect, useState } from 'react';
type navlinks = {
  name: string;
  url: string;
};

interface IProps {
  onClickAppointment?: (e: React.MouseEvent) => void;
  onClickLogin?: (e: React.MouseEvent) => void;
}

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
const Navbar = ({
  onClickAppointment = (e) => {
    alert('Appointment Button Clicked');
  },
  onClickLogin = (e) => {
    alert('Login Button Clicked');
  },
}: IProps) => {
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    const appointmentElement = document.getElementById('appointment-id');
    if (appointmentElement) setElement(appointmentElement);
  }, [element]);
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
            onClick={() => handle_appointment_event(element)}
            customClasses={[classes['btn--cta']]}
          >
            Book Appointment
          </Button>
          <Button
            varient="outline"
            onClick={onClickLogin}
            customClasses={[classes['btn--login']]}
          >
            login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
