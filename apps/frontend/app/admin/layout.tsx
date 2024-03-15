import Navbar from '@/Components/Stateful/Navbar/navbar';
import Dashboard_Filter from '@/Components/Stateless/Dashboard_Filter/Dashboard_Filter';
import Protected from '@/providers/protectedProvider';
import classes from './layout.module.scss';
function Auth_Layout({ children }: { children: any }) {
  return (
    <Protected>
      <Navbar />
      <div className={classes['main']}>
        <Dashboard_Filter>{children}</Dashboard_Filter>
      </div>
    </Protected>
  );
}

export default Auth_Layout;
