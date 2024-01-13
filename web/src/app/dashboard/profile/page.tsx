import Profile from '@/components/pages/Profile/Profile';
import {type Metadata} from 'next';
import React from 'react';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Notes App - Profile',
};

const ProfilePage: React.FC = () => {
  return (
    <div className={styles.profilePage}>
      <h1>Hello 👋</h1>
      <Profile />
    </div>
  );
};

export default ProfilePage;
