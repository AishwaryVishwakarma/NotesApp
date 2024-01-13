'use client';

import {Spinner} from '@/assets/loaders';
import useUser from '@/hooks/useUser';
import {isValidString} from '@/utils';
import axios from 'axios';
import React from 'react';

import Loading from './Loading';
import styles from './styles.module.scss';

const Profile = () => {
  const {
    loading: profileLoading,
    profile: {name, email},
    update,
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
    <Loading />
  ) : (
    <form className={styles.profileForm} onSubmit={onSubmitHandler}>
      <div className={styles.inputField}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          autoComplete='name'
          onChange={update}
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
          onChange={update}
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
