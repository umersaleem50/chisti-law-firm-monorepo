import Testimonials from '../../../Components/Layouts/Testimonials/Testimonials';
import Make_Appointment from '../../../Components/Layouts/Make_Appointment/Make_Appointment';
import Finder from '../../../Components/Stateless/Finder/Finder';
import Footer from '../../../Components/Layouts/Footer/Footer';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import Service_Filters from '../../../Components/Layouts/Filters/Service_Filters/Service_Filters';
import Service_Results from '../../../Components/Layouts/services_results/Services_Results';
import { notFound } from 'next/navigation';
import classes from '../page.module.scss';
import { envConfig } from '@/envConfig';
import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';

const fetchData = async (slug: string | '' | undefined) => {
  // const url = 'https://dummyjson.com/products';
  const url =
    `${envConfig.API_PATH || 'http://localhost:3333/api/v1'}/services/` + slug;
  const res = await fetch(url, { cache: 'force-cache' });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

const Services = async ({ params }: any) => {
  const { slug } = params;

  const { data } = await fetchData(slug);

  return (
    <>
      <NavbarComponent />
      <div className={classes['main']}>
        <Service_Filters>
          <Service_Results
            src={`${envConfig.STORAGE_BUCKET_URL}/assets/services/${data?.image}`}
            heading={data?.heading}
            description={data?.description}
            dataArr={data?.content}
          />
        </Service_Filters>
      </div>
      <Finder />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </>
  );
};

// export async function generateStaticParams() {
//   const url = `${process.env.NEXT_PUBLIC_API_PATH}/services`;
//   console.log(process.env.NEXT_PUBLIC_API_PATH);

//   try {
//     const res = await fetch(url, { cache: "no-cache" });
//     const servicesArray = await res.json();

//     const params = servicesArray.data.map((el: any) => {
//       return {
//         slug: el.slug,
//       };
//     });
//     console.log(params);

//     return params;
//   } catch (error) {
//     console.log(error);
//     return {};
//   }
// }

export default Services;
