import Navbar from '@/Components/Stateful/Navbar/navbar';
import Dashboard_Filter from '@/Components/Stateless/Dashboard_Filter/Dashboard_Filter';
// import Protected from '@/providers/protectedProvider';
import classes from './layout.module.scss';
import { NextAuthProvider } from '@/providers/AuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import ErrorPage from '@/providers/ErrorPage';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Organize your appointments, cases and more.',
};

async function Auth_Layout({ children }: { children: any }) {
  const session = await getServerSession(authOptions);

  return (
    <NextAuthProvider session={session}>
      {session ? (
        <>
          <Navbar />
          <div className={classes['main']}>
            <Dashboard_Filter>{children}</Dashboard_Filter>
          </div>
        </>
      ) : (
        <ErrorPage />
      )}
    </NextAuthProvider>
  );
}
// <Protected>
//   <>
//     <Navbar />
//     <div className={classes['main']}>
//       <Dashboard_Filter>{children}</Dashboard_Filter>
//     </div>
//   </>
// </Protected>

export default Auth_Layout;
