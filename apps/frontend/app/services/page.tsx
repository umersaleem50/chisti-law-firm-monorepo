import Testimonials from '../../Components/Layouts/Testimonials/Testimonials';
import Make_Appointment from '../../Components/Layouts/Make_Appointment/Make_Appointment';
import Finder from '../../Components/Stateless/Finder/Finder';
import Footer from '../../Components/Layouts/Footer/Footer';
import Navbar from '../../Components/Stateful/Navbar/navbar';

const Services = ({ params }) => {
  return (
    <>
      <Navbar />
      <div>Service</div>
      <Finder />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
