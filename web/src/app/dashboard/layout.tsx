import Layout from '@/components/Layout/Layout';
import React from 'react';

import styles from './styles.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Layout className={styles.layout} showParticles={false}>
      {children}
    </Layout>
  );
};

export default DashboardLayout;
