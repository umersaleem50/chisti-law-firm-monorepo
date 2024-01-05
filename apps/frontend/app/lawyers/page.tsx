import Footer from '../../Components/Layouts/Footer/Footer';
import Blogs from '../../Components/Layouts/Blogs/Blogs';
import Team from '../../Components/Layouts/Team/Team';
import Navbar from '../../Components/Stateful/Navbar/navbar';
import Team_Filters from '../../Components/Layouts/Filters/Team_Filters/Team_Filters';

const Lawyers = () => {
  return (
    <>
      <Navbar />
      <Team_Filters />
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default Lawyers;
