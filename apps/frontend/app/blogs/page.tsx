import Footer from '../../Components/Layouts/Footer/Footer';
import Navbar from '../../Components/Stateful/Navbar/navbar';
import Suggested_Blogs from '@/Components/Layouts/Latest_Blogs/Latest_Blogs';
import Team from '@/Components/Layouts/Team/Team';
import Make_Appointment from '@/Components/Layouts/Make_Appointment/Make_Appointment';

export const metadata = {
  title: 'Read the latest blogs',
  description: 'Read the latest blogs related to legal cases.',
};

const ALL_BLOGS = () => {
  return (
    <>
      <Navbar />

      <Suggested_Blogs title="Latest Blogs" />

      {/* <Blogs />
       */}
      <Team />
      <Make_Appointment />
      <Footer />
    </>
  );
};

export default ALL_BLOGS;
