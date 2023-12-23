import Layout from '@/components/Layout/Layout';
import type {Metadata} from 'next';
import React from 'react';

import styles from './styles.module.scss';
import SignupForm from '@/components/SignupForm/SignupForm';

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'A Notes sharing platform',
  creator: 'Aishwary Vishwakarma',
};

const SignupPage = () => {
  return (
    <Layout className={styles.signupPage}>
      <section className={styles.container}>
        <h1>Sign Up</h1>
        <SignupForm />
      </section>
    </Layout>
  );
};

export default SignupPage;
