import Testimonials from '../../Components/Layouts/Testimonials/Testimonials';
import Make_Appointment from '../../Components/Layouts/Make_Appointment/Make_Appointment';
import Finder from '../../Components/Stateless/Finder/Finder';
import Footer from '../../Components/Layouts/Footer/Footer';
import Navbar from '../../Components/Stateful/Navbar/navbar';
import Service_Filters from 'apps/frontend/Components/Layouts/Filters/Service_Filters/Service_Filters';
import { filterData } from 'apps/frontend/text/service_section_data';

const Services = () => {
  return (
    <>
      <Navbar />
      <Service_Filters data={filterData} activeId="" />
      <Finder />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
