import { envConfig } from '@/envConfig';
import axios from 'axios';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// import GoogleProvider from 'next-auth/providers/google';
// const authenticate = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   const data = { email, password };
//   // const url = 'https://api.chishtilawfirm.com.pk/api/v1' + '/auth/signin';
//   const url = envConfig.API_PATH + '/auth/signin';
//   try {
//     const response = await axios({
//       url,
//       method: 'POST',
//       data,
//     });
//     console.log('this is the res', response);

//     if (response.data) return Promise.resolve(response.data);
//   } catch (error: any) {
//     console.log(error);

//     return Promise.reject(error);
//   }
// };

export const authOptions: AuthOptions = {
  secret: envConfig.JWT_SECRETKEY,
  providers: [
    // GoogleProvider({
    //   //@ts-ignore
    //   clientId: process.env['GOOGLE_CLIENT_ID'],
    //   //@ts-ignore
    //   clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any, req: any) {
        // if (typeof credentials !== 'undefined') {
        //   try {
        //     const res = await authenticate({
        //       email: credentials.email,
        //       password: credentials.password,
        //     });
        //     if (res) return { ...res.data, token: res.token };
        //   } catch (error: any) {
        //     return null;
        //   }
        // } else return null;

        try {
          // const res = await authenticate({
          //   email: credentials.email,
          //   password: credentials.password,
          // });
          const url = envConfig.API_PATH + '/auth/signin';
          // const url = 'http://localhost:3333/api/v1' + '/auth/signin';
          const data = {
            email: credentials.email,
            password: credentials.password,
          };
          const response = await axios({
            url,
            method: 'POST',
            data,
          });
          const resObj = response.data;

          if (resObj.data) return { ...resObj.data, token: resObj.token };
          // return { user: { email: 'test@test.com' }, token: 'jfdkjfkd' };
          //   return { user: { email: 'test@test.com', token: 'jfkdjfkdjkl' } };
        } catch (error: any) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account.provider === 'google') {
    //     return true;
    //   }
    //   return true; // Do different verification for other providers that don't have `email_verified`
    // },
    async jwt({ user, token }) {
      return { user, ...token };
    },
    async session({ session, user, token }) {
      return {
        expires: session.expires,
        ...token,
      };
    },
  },
  session: { strategy: 'jwt' },
  pages: { signIn: '/auth', signOut: '/auth' },
};
