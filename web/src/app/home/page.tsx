'use client';

import {Spinner} from '@/assets/loaders';
import CustomParticles from '@/components/CustomParticles/CustomParticles';
import Layout from '@/components/Layout/Layout';
import useUser from '@/hooks/useUser';
import React from 'react';

import styles from './styles.module.scss';

const HomePage = () => {
  const {loading} = useUser();

  return (
    <Layout className={styles.homePage}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <Spinner className={styles.spinner} />
        </div>
      ) : (
        <section className={styles.container}>wefwe</section>
      )}
      <CustomParticles className={styles.particlesContainer} />
    </Layout>
  );
};

export default HomePage;
