import Layout from '@/components/Layout/Layout';
import LoginForm from '@/components/LoginForm/LoginForm';
import {type Metadata} from 'next';
import Image from 'next/image';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Notes App | Login',
  description: 'Please login using your details',
};

const SignInPage: React.FC = () => {
  return (
    <Layout
      className={styles.signInPage}
      showNavbar={false}
      particleProps={{
        className: styles.particlesContainer,
      }}
    >
      <section className={styles.container}>
        <Image
          src='https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='mountains'
          height={1000}
          width={700}
          className={styles.left}
          fetchPriority='high'
          priority
        />
        <LoginForm className={styles.right} />
      </section>
    </Layout>
  );
};

export default SignInPage;
