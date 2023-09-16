import Footer from '../../Components/Layouts/Footer/Footer';
import Blogs from '../../Components/Layouts/Blogs/Blogs';
import Team from '../../Components/Layouts/Team/Team';
import Navbar from '../../Components/Stateful/Navbar/navbar';

const Lawyers = () => {
  return (
    <>
      <Navbar />
      <div>Lawyers</div>
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default Lawyers;
