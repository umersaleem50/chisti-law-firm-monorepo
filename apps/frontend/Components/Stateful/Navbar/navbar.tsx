'use client';
import Image from 'next/image';
import classes from './navbar.module.scss';
import Button, { MenuButton } from '../../Button/Button';
import { handle_appointment_event } from '@/utils/handler/bookeEventHandler';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// import { signOut, useSession } from 'next-auth/react';
import { verifyToken } from '@/utils/verifyToken/verifyToken';
import { generateLinks } from '@/utils/generateNavLinks/generateNavLinks';
import {
  handle_dashboard_redirect,
  handle_login,
  handle_logout_button,
} from '@/utils/handler/handle_nav_actions';
import Navbar_Menu from '../Navbar_Menu/Navbar_Menu';
import { CookiesProvider } from 'react-cookie';

const Navbar = async ({ cookie = '' }: { cookie?: string }) => {
  const [element, setElement] = useState<HTMLElement>();
  const [isToggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();

  // const jwtCookie = cookies().get('jwt');
  const handle_toggle_menu = () => {
    setToggleMenu((prev) => !prev);
  };

  useEffect(() => {
    const appointmentElement = document.getElementById('appointment-id');
    if (appointmentElement) setElement(appointmentElement);
  }, [element]);
  return (
    <>
      <CookiesProvider>
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
              <ul className={classes['nav']}>{generateLinks(classes)}</ul>
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
                  onClick={() => handle_dashboard_redirect(router)}
                  customClasses={[classes['btn--cta']]}
                >
                  Dashboard
                </Button>
              )}
              {!(await verifyToken(cookie)) ? (
                <Button
                  varient="outline"
                  onClick={() => handle_login(router)}
                  customClasses={[classes['btn--login']]}
                >
                  login
                </Button>
              ) : (
                <Button
                  varient="primary"
                  onClick={() => handle_logout_button(router)}
                  customClasses={[classes['btn--logout']]}
                >
                  Logout
                </Button>
              )}
              <MenuButton
                onClick={handle_toggle_menu}
                isToggle={isToggleMenu}
              />
            </div>
            <Navbar_Menu
              element={element}
              cookie={cookie}
              isToggle={isToggleMenu}
            />
          </div>
        </div>
      </CookiesProvider>
    </>
  );
};

export default Navbar;
