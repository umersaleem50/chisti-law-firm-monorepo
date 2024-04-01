import { cookies } from 'next/headers';
import Navbar from './navbar';

const NavbarComponent = () => {
  const jwtCookie = cookies().get('jwt');

  return <Navbar cookie={jwtCookie?.value} />;
};

export default NavbarComponent;
