import Layout from '@/components/Layout/Layout';
import SignupForm from '@/components/SignupForm/SignupForm';
import type {Metadata} from 'next';
import React from 'react';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Notes App | Signup',
  description: 'Please signup using your details',
};

const SignupPage: React.FC = () => {
  return (
    <Layout
      className={styles.signupPage}
      showNavbar={false}
      particleProps={{
        className: styles.particlesContainer,
      }}
    >
      <section className={styles.container}>
        <h1>Sign Up</h1>
        <SignupForm />
      </section>
    </Layout>
  );
};

export default SignupPage;
