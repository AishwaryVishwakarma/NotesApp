import CustomParticles from '@/components/CustomParticles/CustomParticles';
import Layout from '@/components/Layout/Layout';
import SignupForm from '@/components/SignupForm/SignupForm';
import type {Metadata} from 'next';
import React from 'react';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Notes App | Signup',
  description: 'Please signup using your details',
};

const SignupPage = () => {
  return (
    <Layout className={styles.signupPage} navbar={false}>
      <section className={styles.container}>
        <h1>Sign Up</h1>
        <SignupForm />
      </section>
      <CustomParticles className={styles.particlesContainer} />
    </Layout>
  );
};

export default SignupPage;
