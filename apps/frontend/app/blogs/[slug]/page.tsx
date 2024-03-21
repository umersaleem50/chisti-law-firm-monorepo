import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import BlogLayout from '@/Components/Layouts/Blog_Layout/Blog_Layout';
import classes from '../page.module.scss';
import { envConfig } from '@/envConfig';
import { notFound } from 'next/navigation';
import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';
// import { Metadata, ResolvingMetadata } from 'next';

const fetchBlogs = async (slug: string) => {
  try {
    const response = await fetch(
      (envConfig.API_PATH || 'http://localhost:3333/api/v1') + '/blogs/' + slug,
      { method: 'get', cache: 'no-store' }
    );

    const dataObj: any = await response.json();

    if (dataObj.data) return dataObj.data;
    return dataObj;
  } catch (error: any) {
    if (error.message) throw new Error(error.message);
    throw new Error('Failed to fetch data');
  }
};

// export async function generateMetadata(
//   { params }: { params: any },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const data = await fetchBlogs(params.slug);

//   if (data)
//     return {
//       title: data.title,
//       description: data.description,
//     };
//   return {
//     title: 'Read the blog',
//     description: 'Read the blogs to get information about legal cases.',
//   };
// }

const Blog_With_ID = async ({ params }: { params: any }) => {
  const { slug } = params;
  const data = await fetchBlogs(slug);
  if (data.error) return notFound();

  return (
    <>
      <NavbarComponent />
      <div className={classes['main']}>
        <BlogLayout
          description={data.description}
          coverPicture={data.coverPicture}
          heading={data.heading}
          readtime={data.readtime}
          createdOn={data.createdOn}
          content={data.content}
        />
      </div>
      <Blogs />
      <Footer />
    </>
  );
};

// export async function generateStaticParams() {
//   const url = `${process.env.NEXT_PUBLIC_API_PATH}/blogs`;
//   const res = await fetch(url, { cache: 'default' });
//   const servicesArray = await res.json();

//   const params = servicesArray.data.map((el: any) => {
//     console.log(el);

//     return {
//       // slug: el._id,
//       slug: el.slug,
//       ...el,
//     };
//   });

//   return params;
// }

export const dynamic = 'force-dynamic';

export default Blog_With_ID;
