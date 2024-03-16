import Navbar from '@/Components/Stateful/Navbar/navbar';
import Dashboard_Filter from '@/Components/Stateless/Dashboard_Filter/Dashboard_Filter';
// import Protected from '@/providers/protectedProvider';
import classes from './layout.module.scss';
import { NextAuthProvider } from '@/providers/AuthProvider';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Organize your appointments, cases and more.',
};

function Auth_Layout({ children }: { children: any }) {
  return (
    // <Protected>
    <NextAuthProvider>
      <Navbar />
      <div className={classes['main']}>
        <Dashboard_Filter>{children}</Dashboard_Filter>
      </div>
    </NextAuthProvider>
    // </Protected>
  );
}

export default Auth_Layout;
