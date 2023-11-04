import Testimonials from '../../../Components/Layouts/Testimonials/Testimonials';
import Make_Appointment from '../../../Components/Layouts/Make_Appointment/Make_Appointment';
import Finder from '../../../Components/Stateless/Finder/Finder';
import Footer from '../../../Components/Layouts/Footer/Footer';
import Navbar from '../../../Components/Stateful/Navbar/navbar';
import Service_Filters from '../../../Components/Layouts/Filters/Service_Filters/Service_Filters';
import Service_Results from '../../../Components/Layouts/services_results/Services_Results';
import { notFound } from 'next/navigation';

const dummy_data = {
  civil: {
    src: '/temp/services/civil.jpg',
    heading: 'Our Comprehensive Civil Services',
    description: `Navigating the complexities of civil services demands a team of seasoned professionals. At
  Chishti Law Firm, our dedicated lawyers specialize in civil matters, providing a comprehensive
  range of services to address your unique needs. From contract disputes to property rights, trust
  us to be your unwavering advocates.`,
    dataArr: [
      {
        heading: `1. Contractual Clarit`,
        paragraph: `Ensure your contracts stand on solid ground. Our legal experts specialize in drafting,
    reviewing, and negotiating contracts to protect your interests.`,
      },
      {
        heading: `2. Property Rights Protection`,
        paragraph: `Safeguard what's rightfully yours. Our experienced team navigates property disputes with
        precision, ensuring a fair resolution in every case.`,
      },
      {
        heading: `3. Employment Disputes Resolution`,
        paragraph: `Employee-employer conflicts? Let us bridge the divide. Our experts specialize in resolving
        employment disputes through mediation, negotiation, or litigation.`,
      },
      {
        heading: `4. Business Litigation Advocacy`,
        paragraph: `Protect your business interests with our strategic litigation services. From intellectual property
        disputes to commercial litigation, we're your allies in the courtroom.`,
      },
      {
        heading: `5. Civil Rights Advocacy`,
        paragraph: `Stand up for justice. Our team is passionate about defending civil rights, and ensuring that
        every individual is treated fairly under the law.`,
      },
      {
        heading: `Why Choose Chishti Law Firm for Your Civil Services Needs?`,
      },
      {
        heading: `Proven Track Record`,
        paragraph: `Benefit from a history of successful civil services resolutions. Our track record speaks volumes
        about our commitment to achieving favorable outcomes for our clients.
        `,
      },
      {
        heading: `Tailored Legal Strategies`,
        paragraph: `No two cases are the same. We craft personalized legal strategies to address the unique
        aspects of your civil matter, ensuring a targeted approach for optimal results.`,
      },
      {
        heading: `Transparent Communication`,
        paragraph: `Stay informed at every step. Our commitment to transparent communication means you're
        always in the loop, empowering you to make informed decisions.`,
      },
      {
        heading: `Experienced Legal Team`,
        paragraph: `Trust your case to seasoned professionals. Our lawyers bring a wealth of experience to the
        table, backed by a passion for justice and a relentless pursuit of success.`,
      },
    ],
  },
  family: {
    src: '/temp/services/family.jpg',
    heading: 'Our Comprehensive Family Services',
    description: `Navigating the complexities of civil services demands a team of seasoned professionals. At
  Chishti Law Firm, our dedicated lawyers specialize in civil matters, providing a comprehensive
  range of services to address your unique needs. From contract disputes to property rights, trust
  us to be your unwavering advocates.`,
    dataArr: [
      {
        heading: `1. Contractual Clarit`,
        paragraph: `Ensure your contracts stand on solid ground. Our legal experts specialize in drafting,
    reviewing, and negotiating contracts to protect your interests.`,
      },
      {
        heading: `2. Property Rights Protection`,
        paragraph: `Safeguard what's rightfully yours. Our experienced team navigates property disputes with
        precision, ensuring a fair resolution in every case.`,
      },
      {
        heading: `3. Employment Disputes Resolution`,
        paragraph: `Employee-employer conflicts? Let us bridge the divide. Our experts specialize in resolving
        employment disputes through mediation, negotiation, or litigation.`,
      },
      {
        heading: `4. Business Litigation Advocacy`,
        paragraph: `Protect your business interests with our strategic litigation services. From intellectual property
        disputes to commercial litigation, we're your allies in the courtroom.`,
      },
      {
        heading: `5. Civil Rights Advocacy`,
        paragraph: `Stand up for justice. Our team is passionate about defending civil rights, and ensuring that
        every individual is treated fairly under the law.`,
      },
      {
        heading: `Why Choose Chishti Law Firm for Your Civil Services Needs?`,
      },
      {
        heading: `Proven Track Record`,
        paragraph: `Benefit from a history of successful civil services resolutions. Our track record speaks volumes
        about our commitment to achieving favorable outcomes for our clients.
        `,
      },
      {
        heading: `Tailored Legal Strategies`,
        paragraph: `No two cases are the same. We craft personalized legal strategies to address the unique
        aspects of your civil matter, ensuring a targeted approach for optimal results.`,
      },
      {
        heading: `Transparent Communication`,
        paragraph: `Stay informed at every step. Our commitment to transparent communication means you're
        always in the loop, empowering you to make informed decisions.`,
      },
      {
        heading: `Experienced Legal Team`,
        paragraph: `Trust your case to seasoned professionals. Our lawyers bring a wealth of experience to the
        table, backed by a passion for justice and a relentless pursuit of success.`,
      },
    ],
  },
};

const fetchData = async (slug: string | '' | undefined) => {
  // const url = 'https://dummyjson.com/products';
  const url = 'http://localhost:3333/api/v1/services/' + slug;
  const res = await fetch(url, { cache: 'force-cache' });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

const Services = async ({ params }: { params: { name?: string } }) => {
  const data = await fetchData(params.name);

  return (
    <>
      <Navbar />
      <Service_Filters>
        <Service_Results
          src={data.data.src}
          heading={data.data.heading}
          description={data.data.description}
          dataArr={data.data.content}
        />
      </Service_Filters>
      <Finder />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Services;
