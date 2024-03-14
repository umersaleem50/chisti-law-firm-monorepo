import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import BlogLayout from '@/Components/Layouts/Blog_Layout/Blog_Layout';

const fetchBlogs = async (slug: string) => {
  try {
    const response = await fetch(
      (process.env.API_PATH || 'http://localhost:3333/api/v1') +
        '/blogs/' +
        slug,
      { method: 'get', cache: 'force-cache' }
    );

    const dataObj: any = await response.json();

    if (dataObj.data) return dataObj.data;
    return dataObj;
  } catch (error: any) {
    if (error.message) throw new Error(error.message);
    throw new Error('Failed to fetch data');
  }
};

const Blog_With_ID = async ({ params }: { params: any }) => {
  const { slug } = params;
  const data = await fetchBlogs(slug);

  return (
    <>
      <Navbar />
      <BlogLayout
        description={data.description}
        coverPicture={data.coverPicture}
        heading={data.heading}
        readtime={data.readtime}
        createdOn={data.createdOn}
        content={data.content}
      />
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

export default Blog_With_ID;
