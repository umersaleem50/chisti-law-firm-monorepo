import Image from 'next/image';
import classes from './page.module.scss';
import LoginForm from '@/Components/forms/login/login';
import Navbar from '@/Components/Stateful/Navbar/navbar';
import Footer from '@/Components/Layouts/Footer/Footer';

function Page() {
  return (
    <>
      <Navbar />
      <div className={classes['main']}>
        <div className={classes['main__left']}>
          <Image
            src={'/assets/homepage/person.jpg'}
            fill
            alt="lawyer working on laptop"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={classes['main__right']}>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
