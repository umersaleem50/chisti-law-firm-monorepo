import { NAV_LINKS, navlinks } from '@/dev-data/navlinks';
import Link from 'next/link';

export const generateLinks = (classes: any) => {
  return NAV_LINKS.map(({ url, name }, i: number) => {
    return (
      <li key={i}>
        <Link href={url} legacyBehavior>
          <a className={classes['nav__link']}>{name}</a>
        </Link>
      </li>
    );
  });
};
