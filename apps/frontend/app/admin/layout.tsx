import Dashboard_Filter from '@/Components/Stateless/Dashboard_Filter/Dashboard_Filter';
// import Protected from '@/providers/protectedProvider';
import classes from './layout.module.scss';

import Protected from '@/providers/protectedProvider';
import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Organize your appointments, cases and more.',
};

async function Auth_Layout({ children }: { children: any }) {
  // const session = await getServerSession(authOptions);

  return (
    // <NextAuthProvider session={session}>
    //   {session ? (
    <Protected>
      <>
        <NavbarComponent />
        <div className={classes['main']}>
          <Dashboard_Filter>{children}</Dashboard_Filter>
        </div>
      </>
    </Protected>
    //   ) : (
    //     <ErrorPage />
    //   )}
    // </NextAuthProvider>
  );
}

export default Auth_Layout;
