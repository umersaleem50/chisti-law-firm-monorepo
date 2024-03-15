import Footer from '../../Components/Layouts/Footer/Footer';
import Blogs from '../../Components/Layouts/Blogs/Blogs';
import Team from '../../Components/Layouts/Team/Team';
import Navbar from '../../Components/Stateful/Navbar/navbar';
import Team_Filters from '../../Components/Layouts/Filters/Team_Filters/Team_Filters';
import Lawyers_Results from '@/Components/Layouts/Lawyers_Results/Lawyers_Results';

import classes from './page.module.scss';

const Lawyers = () => {
  // const handleCheckboxChange = (event: any) => {
  //   // alert("set change handler at lawyers[page.tsx]");
  //   return;
  // };

  return (
    <>
      <Navbar />
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

export default Lawyers;
