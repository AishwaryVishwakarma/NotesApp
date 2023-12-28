'use client';

import {Spinner} from '@/assets/loaders';
import Layout from '@/components/Layout/Layout';
import useUser from '@/hooks/useUser';
import React from 'react';

import styles from './styles.module.scss';

const HomePage = () => {
  const {loading, userId} = useUser();

  return (
    <Layout
      className={styles.homePage}
      particleProps={{
        className: styles.particlesContainer,
      }}
      queryParams={{
        userId,
      }}
    >
      {loading ? (
        <div className={styles.loadingContainer}>
          <Spinner className={styles.spinner} />
        </div>
      ) : (
        <section className={styles.container}>wefwe</section>
      )}
    </Layout>
  );
};

export default HomePage;
