'use client';
// import Loading_Spinner from '@/Components/Stateless/Loading_Spinner/Loading_Spinner';

import * as jose from 'jose';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { envConfig } from '@/envConfig';
import { CookiesProvider, useCookies } from 'react-cookie';
// import Typography from '@/Components/Typography/Typography';
// import Navbar from '@/Components/Stateful/Navbar/navbar';
import ErrorPage from './ErrorPage';
function Protected({ children }: { children: any }) {
  const [jwtCookie] = useCookies(['jwt']);
  // const [isAuth, setIsAuth] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  const verifyToken = async (token: any) => {
    try {
      const data = await jose.jwtVerify(
        token,
        new TextEncoder().encode(envConfig.JWT_SECRETKEY)
      );

      if (data.payload && data.protectedHeader) {
        return children;
        // sessionStorage.setItem('account', JSON.stringify(data.payload));
      } else return <ErrorPage />;
    } catch (error) {
      console.log(error);

      // console.log('this is error', error);
      // //   alert(error);
      // if (process.env.NODE_ENV !== 'production') {
      //   console.log(error);
      //   alert('error');
      // }
      return <ErrorPage />;

      // else router.push('/auth');
    }
  };
  // useEffect(() => {
  //   verifyToken(jwtCookie.jwt);
  // }, []);
  return <CookiesProvider>{verifyToken(jwtCookie.jwt)}</CookiesProvider>;
}

export default Protected;
