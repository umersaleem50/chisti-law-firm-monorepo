'use client';
import Image from 'next/image';
import classes from './navbar.module.scss';
import Link from 'next/link';
import Button from '../../Button/Button';
import { handle_appointment_event } from '@/utils/handler/bookeEventHandler';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// import { signOut, useSession } from 'next-auth/react';
import { jwtVerify } from 'jose';
import { envConfig } from '@/envConfig';
import { CookiesProvider, useCookies } from 'react-cookie';
import axios from 'axios';
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
  // {
  //   name: "Case Management",
  //   url: "/",
  // },
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
const Navbar = async ({ cookie = '' }: { cookie?: string }) => {
  const [element, setElement] = useState<HTMLElement>();

  // const jwtCookie = cookies().get('jwt');

  const router = useRouter();
  const handle_login_button = async () => {
    // e.preventDefault();
    try {
      const res = await axios({
        url: envConfig.API_PATH + '/auth/logout',
        method: 'POST',
        withCredentials: true,
      });
      alert('logout successful');
    } catch (error) {
      alert('Failed to logout your profile.');
    } finally {
      router.push('/auth');
    }
  };

  const handle_dashboard_redirect = () => {
    router.push('/admin/appointments');
  };

  // const { data: session } = useSession();
  // const verifyToken = async (token: any) => {
  //   try {
  //     const data = await jose.jwtVerify(
  //       token,
  //       new TextEncoder().encode(envConfig.JWT_SECRETKEY)
  //     );
  //     if (data.payload && data.protectedHeader) {
  //       setIsAuth(true);
  //     }
  //   } catch (error) {
  //     //   alert(error);
  //     // router.push("/auth");
  //   }
  // };

  const verifyToken = async (token: string) => {
    const tokenStr = token?.toString();
    if (!tokenStr || tokenStr === '') return false;
    const verified = await jwtVerify(
      tokenStr,
      new TextEncoder().encode(envConfig.JWT_SECRETKEY)
    );
    if (verified && verified.payload.id) {
      return true;
    }
    return false;
  };

  // const handle_logout = () => {
  //   setCookie('jwt', '');
  //   router.push('/auth');
  // };

  // useEffect(() => {
  //   verifyToken(jwtCookie.jwt);
  // }, []);

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
          src={'/logo-nobg.png'}
          style={{ objectFit: 'cover' }}
        />
        <nav>
          <ul className={classes['nav']}>{generateLinks(NAV_LINKS)}</ul>
        </nav>
        <div className={classes['container__buttons']}>
          {!(await verifyToken(cookie)) ? (
            <Button
              varient="primary"
              onClick={() => handle_appointment_event(element)}
              customClasses={[classes['btn--cta']]}
            >
              Book Appointment
            </Button>
          ) : (
            <Button
              varient="outline"
              onClick={() => handle_dashboard_redirect()}
              customClasses={[classes['btn--cta']]}
            >
              Dashboard
            </Button>
          )}
          {!(await verifyToken(cookie)) ? (
            <Button
              varient="outline"
              onClick={handle_login_button}
              customClasses={[classes['btn--login']]}
            >
              login
            </Button>
          ) : (
            <Button
              varient="primary"
              onClick={handle_login_button}
              customClasses={[classes['btn--logout']]}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
