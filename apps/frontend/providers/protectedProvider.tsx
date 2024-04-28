// 'use client'
import { envConfig } from '@/envConfig';
import ErrorPage from './ErrorPage';
// import * as jose from 'jose';
import { cookies } from 'next/headers';
import axios from 'axios';

function Protected({ children }: { children: any }) {
  // const [jwtCookie] = useCookies(['jwt']);
  const jwtCookie = cookies().get('jwt');

  // const verifyToken = async (token: any) => {
  //   try {
  //     const data = await jose.jwtVerify(
  //       token,
  //       new TextEncoder().encode(envConfig.JWT_SECRETKEY)
  //     );

  //     if (data.payload && data.protectedHeader) {
  //       return children;
  //       // sessionStorage.setItem('account', JSON.stringify(data.payload));
  //     } else return <ErrorPage />;
  //   } catch (error) {
  //     console.log(error);
  //     return <ErrorPage />;
  //   }
  // };
  const verifyToken = async () => {
    try {
      await axios({
        url: envConfig.API_PATH + '/auth/verify',
        method: 'POST',
        withCredentials: true,
        headers: {
          Authorization: 'Bearer ' + jwtCookie?.value,
        },
      });

      return children;
    } catch (error: any) {
      return <ErrorPage />;
    }
  };

  return verifyToken();
}

export default Protected;
