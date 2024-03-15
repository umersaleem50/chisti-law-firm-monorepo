// "use client";
import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Team from '../../../Components/Layouts/Team/Team';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import Lawyer_Details from '@/Components/Layouts/Lawyer_Detail/Lawyer_Details'; // ILawyer,
import { notFound } from 'next/navigation';
import classes from '../page.module.scss';
import { envConfig } from '@/envConfig';

const fetchData = async (slug: string | '' | undefined) => {
  const url =
    `${envConfig.API_PATH || 'http://localhost:3333/api/v1'}/lawyers/` + slug;
  const res = await fetch(url, { method: 'get' });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

const Lawyer_With_ID = async ({ params }: { params: any }) => {
  const { name } = params;

  const { data } = await fetchData(name);

  return (
    <>
      <Navbar />
      <div className={classes['main']}>
        <Lawyer_Details
          bio={data.bio}
          contact={data.contact}
          expirence={data.expirence}
          firstName={data.firstName}
          gallery={data.gallery}
          lastName={data.lastName}
          professions={data.professions}
          profilePicture={data.profilePicture}
          workplace={data.workplace}
          email={data.email}
          key={122}
        />
      </div>
      <Team />
      <Blogs />
      <Footer />
    </>
  );
};

// export async function generateStaticParams() {
//   const url = `${process.env.NEXT_PUBLIC_API_PATH}/lawyers`;
//   const res = await fetch(url);
//   const lawyersArr = await res.json();

//   const params = lawyersArr.data.map((el: any) => {
//     return {
//       name: el._id,
//     };
//   });

//   return params;
// }

// export const dynamicParams = false;
export default Lawyer_With_ID;
