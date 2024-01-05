import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Team from '../../../Components/Layouts/Team/Team';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import Team_Filters from '../../../Components/Layouts/Filters/Team_Filters/Team_Filters';
import Lawyers_Results from '../../../Components/Layouts/Lawyers_Results/Lawyers_Results';

const Lawyer_With_ID = ({ params }: { params: { id?: string } }) => {
  return (
    <>
      <Navbar />
      <Team_Filters>
        <Lawyers_Results />
      </Team_Filters>
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

export default Lawyer_With_ID;
