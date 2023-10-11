import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Team from '../../../Components/Layouts/Team/Team';
import Navbar from '../../../Components/Stateful/Navbar/navbar';

const Lawyer_With_ID = ({ params }: { params: { id?: string } }) => {
  return (
    <>
      <Navbar />
      <div>Lawyer_With_ID : {params.id}</div>
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default Lawyer_With_ID;
