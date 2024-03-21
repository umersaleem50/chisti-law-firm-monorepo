import Testimonials from '../../Components/Layouts/Testimonials/Testimonials';
import Make_Appointment from '../../Components/Layouts/Make_Appointment/Make_Appointment';
import Finder from '../../Components/Stateless/Finder/Finder';
import Footer from '../../Components/Layouts/Footer/Footer';
import Service_Filters from '../../Components/Layouts/Filters/Service_Filters/Service_Filters';
import classes from './page.module.scss';
import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';
const Services = () => {
  return (
    <>
      <NavbarComponent />
      <div className={classes['main']}>
        <Service_Filters />
      </div>

      <Finder />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
