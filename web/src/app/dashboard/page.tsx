import {type Metadata} from 'next';
import React from 'react';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Notes App - Home',
};

const HomePage: React.FC<PageProps> = () => {
  return (
    <div className={styles.homePage}>
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
