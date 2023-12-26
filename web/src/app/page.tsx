import CustomParticles from '@/components/CustomParticles/CustomParticles';
import Layout from '@/components/Layout/Layout';
import LoginForm from '@/components/LoginForm/LoginForm';
import Image from 'next/image';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <Layout className={styles.homePage}>
      <section className={styles.container}>
        <Image
          src='https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='mountains'
          height={1000}
          width={700}
          className={styles.left}
        />
        <LoginForm className={styles.right} />
      </section>
      <CustomParticles className={styles.particlesContainer} />
    </Layout>
  );
};

export default Home;
