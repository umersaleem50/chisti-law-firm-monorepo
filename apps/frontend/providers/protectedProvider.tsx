// 'use client'
import { envConfig } from '@/envConfig';
import ErrorPage from './ErrorPage';
import * as jose from 'jose';
import { cookies } from 'next/headers';

function Protected({ children }: { children: any }) {
  // const [jwtCookie] = useCookies(['jwt']);
  const jwtCookie = cookies().get('jwt');

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
      return <ErrorPage />;
    }
  };

  return verifyToken(jwtCookie?.value);
}

export default Protected;
