'use client';

import {Eye, EyeClosed} from '@/assets/icons';
import {Spinner} from '@/assets/loaders';
import {setProfile} from '@/redux/features/profileSlice';
import {useAppDispatch} from '@/redux/store';
import {isValidString} from '@/utils';
import {setStorage} from '@/utils/storage';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React from 'react';

import styles from './styles.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({className}) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [error, setError] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const {name, value} = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setLoading(true);

    setError('');

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}login`, formData)
      .then((res): void => {
        const {id, jwtToken, name, email} = res.data ?? {};
        setStorage(
          {
            'na-token': jwtToken,
          },
          localStorage
        );
        dispatch(setProfile({name, email}));
        router.push(`/dashboard?user_id=${id}`);
      })
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.detail ?? 'Something went wrong';
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form
      className={`${className} ${styles.loginForm}`}
      onSubmit={onSubmitHandler}
    >
      <h1>
        Welcome back!
        <br />
        Log in to your account
      </h1>
      <div className={styles.inputField}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          onChange={onChangeHandler}
          value={formData.email}
          required
        />
      </div>
      <div className={styles.inputField}>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type={passwordVisible ? 'text' : 'password'}
          autoComplete='password'
          onChange={onChangeHandler}
          value={formData.password}
          required
        />
        <span
          className={styles.iconContainer}
          onClick={(): void => {
            setPasswordVisible((prev) => !prev);
          }}
          title={passwordVisible ? 'Hide password' : 'Show password'}
        >
          {passwordVisible ? <Eye /> : <EyeClosed />}
        </span>
      </div>
      <p className={styles.error}>{isValidString(error) && error}</p>
      <button type='submit'>{loading ? <Spinner /> : 'Login'}</button>
      <span className={styles.footer}>
        Don&apos;t have an account? <Link href='/signup'>Sign Up</Link>
      </span>
    </form>
  );
};

export default LoginForm;
