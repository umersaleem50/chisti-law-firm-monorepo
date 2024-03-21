import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import { useParams } from 'next/navigation';
import { envConfig } from '@/envConfig';

const Blog_With_ID = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
      <div>Blog with id : {params.slug}</div>
      <Blogs />
      <Footer />
    </>
  );
};

export async function generateStaticParams() {
  const url = `${envConfig.API_PATH}/blogs`;
  const res = await fetch(url);
  const servicesArray = await res.json();

  const params = servicesArray.data.map((el: any) => {
    return {
      name: el._id,
    };
  });

  return params;
}

export default Blog_With_ID;
