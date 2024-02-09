'use client';

import {Spinner} from '@/assets/loaders';
import useUser from '@/hooks/useUser';
import {isValidString} from '@/utils';
import {Skeleton, type SkeletonConfig} from '@aishwaryv/react-skeleton';
import axios from 'axios';
import React from 'react';

import styles from './styles.module.scss';

const skeletonConfig: SkeletonConfig = [
  {
    id: 'label1',
    style: {
      height: '20px',
      width: '100px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
  {
    id: 'input1',
    style: {
      height: '40px',
      width: '600px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
  {
    id: 'label2',
    style: {
      height: '20px',
      width: '100px',
      background: '#dcdcdc',
      borderRadius: '6px',
      marginTop: '20px',
    },
  },
  {
    id: 'input2',
    style: {
      height: '40px',
      width: '600px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
  {
    id: 'button',
    style: {
      height: '40px',
      width: '200px',
      background: '#dcdcdc',
      borderRadius: '6px',
      marginTop: '40px',
    },
  },
];

const Profile: React.FC = () => {
  const {
    loading: profileLoading,
    profile: {name, email},
    update: updateUser,
  } = useUser();

  const [error, setError] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // setLoading(true);

    setError('');

    // axios
    //   .post(`${process.env.NEXT_PUBLIC_HOST}login`, formData)
    //   .then((res): void => {})
    //   .catch((err) => {
    //     const errorMessage =
    //       err?.response?.data?.detail ?? 'Something went wrong';
    //     setError(errorMessage);
    //   })
    //   .finally(() => setLoading(false));
  };

  return profileLoading ? (
    <Skeleton config={skeletonConfig} className={styles.skeleton} />
  ) : (
    <form className={styles.profileForm} onSubmit={onSubmitHandler}>
      <div className={styles.inputField}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          autoComplete='name'
          onChange={updateUser}
          value={name}
          required
        />
      </div>
      <div className={styles.inputField}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          onChange={updateUser}
          value={email}
          required
        />
      </div>
      <p className={styles.error}>{isValidString(error) && error}</p>
      <button type='submit'>{loading ? <Spinner /> : 'Update'}</button>
    </form>
  );
};

export default Profile;
