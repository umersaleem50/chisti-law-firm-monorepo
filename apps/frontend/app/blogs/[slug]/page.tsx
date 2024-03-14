import Footer from '../../../Components/Layouts/Footer/Footer';
import Blogs from '../../../Components/Layouts/Blogs/Blogs';
import Navbar from '../../../Components/Stateful/Navbar/navbar';

const fetchBlogs = async (slug: string) => {
  try {
    const response = await fetch(
      (process.env.API_PATH || 'http://localhost:3333/api/v1') +
        '/blogs/' +
        slug,
      { method: 'get', cache: 'force-cache' }
    );

    return response.json();
  } catch (error: any) {
    if (error.message) throw new Error(error.message);
    throw new Error('Failed to fetch data');
  }
};

const Blog_With_ID = async ({ params }: { params: any }) => {
  const { slug } = params;
  const data = await fetchBlogs(slug);

  console.log(data);

  return (
    <>
      <Navbar />
      <div>Blog with id : {slug}</div>
      <div>Blog with id : {data.readtime}</div>
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
