'use client';
import Button from '@/Components/Button/Button';
import classes from './Navbar_Menu.module.scss';

import { generateLinks } from '@/utils/generateNavLinks/generateNavLinks';
import {
  handle_login,
  handle_logout_button,
} from '@/utils/handler/handle_nav_actions';
import { verifyToken } from '@/utils/verifyToken/verifyToken';
import { useRouter } from 'next/navigation';
import { CookiesProvider } from 'react-cookie';
const Navbar_Menu = async ({
  cookie,
  isToggle,
}: {
  cookie: string;
  isToggle: boolean;
  element?: HTMLElement;
}) => {
  const router = useRouter();

  return (
    <CookiesProvider>
      <nav
        className={[
          classes['container'],
          isToggle ? classes['container--active'] : '',
        ].join(' ')}
      >
        <ul className={classes['nav']}>{generateLinks(classes)}</ul>
        <div className={classes['container__buttons']}>
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
        </div>
      </nav>
    </CookiesProvider>
  );
};

export default Navbar_Menu;
