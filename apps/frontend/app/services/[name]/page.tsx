import Testimonials from '../../../Components/Layouts/Testimonials/Testimonials';
import Make_Appointment from '../../../Components/Layouts/Make_Appointment/Make_Appointment';
import Finder from '../../../Components/Stateless/Finder/Finder';
import Footer from '../../../Components/Layouts/Footer/Footer';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import Service_Filters from '../../../Components/Layouts/Filters/Service_Filters/Service_Filters';

const Services = () => {
  return (
    <>
      <Navbar />
      <Service_Filters />
      <Finder />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
