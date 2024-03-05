// "use client";
import Footer from "../../../Components/Layouts/Footer/Footer";
import Blogs from "../../../Components/Layouts/Blogs/Blogs";
import Navbar from "../../../Components/Stateful/Navbar/navbar";

const Blog_With_ID = ({ params }: { params: any }) => {
  const { slug } = params;
  return (
    <>
      <Navbar />
      <div>Blog with id : {slug}</div>
      <Blogs />
      <Footer />
    </>
  );
};

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_API_PATH}/blogs`;
  const res = await fetch(url, { cache: "no-cache" });
  const servicesArray = await res.json();

  const params = servicesArray.data.map((el: any) => {
    return {
      slug: el._id,
    };
  });

  return params;
}

export default Blog_With_ID;
