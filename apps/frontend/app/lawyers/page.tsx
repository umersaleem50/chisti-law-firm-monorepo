import Footer from '../../Components/Layouts/Footer/Footer';
import Blogs from '../../Components/Layouts/Blogs/Blogs';
import Team from '../../Components/Layouts/Team/Team';
import Team_Filters from '../../Components/Layouts/Filters/Team_Filters/Team_Filters';
import Lawyers_Results from '@/Components/Layouts/Lawyers_Results/Lawyers_Results';

import classes from './page.module.scss';
import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';

const Lawyers = () => {
  return (
    <>
      <NavbarComponent />
      <div className={classes['main']}>
        <Team_Filters>
          <Lawyers_Results />
        </Team_Filters>
      </div>
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export const dynamic = 'force-dynamic';

export default Lawyers;
