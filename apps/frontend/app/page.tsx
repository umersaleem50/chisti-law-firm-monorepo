// 'use client';

import NavbarComponent from '@/Components/Stateful/Navbar/navbar.servercomponent';
import Blogs from '../Components/Layouts/Blogs/Blogs';
import Footer from '../Components/Layouts/Footer/Footer';
import Make_Appointment from '../Components/Layouts/Make_Appointment/Make_Appointment';
import Mission from '../Components/Layouts/Mission/Mission';
import Services from '../Components/Layouts/Services/Services';
import Team from '../Components/Layouts/Team/Team';
import Testimonials from '../Components/Layouts/Testimonials/Testimonials';
import Navbar from '../Components/Stateful/Navbar/navbar';
import Finder from '../Components/Stateless/Finder/Finder';
import Header from '../Components/Stateless/header/header';
import styles from './page.module.scss';
// import Certificate from "@/Components/Layouts/Certificates/Certificates";

export default async function Index() {

  return (
    <main className={styles.page}>
      <NavbarComponent />
      <Header />
      <Finder />
      <Services />
      <Mission />
      <Team />
      <Blogs />
      <Make_Appointment />
      <Testimonials />
      <Footer />
    </main>
  );
}

// export const dynamic = 'force-static';
