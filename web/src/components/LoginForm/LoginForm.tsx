'use client';

import {Eye, EyeClosed} from '@/assets/icons';
import {Spinner} from '@/assets/loaders';
import {setStorage} from '@/utils/storage';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const LoginForm = ({className}: {className?: string}) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = React.useState(false);

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

    const {email, password} = formData;

    const payload = {
      email,
      password,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}login`, payload)
      .then((res): void => {
        const {jwtToken} = res.data ?? {};
        setStorage(
          {
            token: jwtToken,
          },
          localStorage
        );
      })
      .catch((err) => console.debug(err))
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
      <button type='submit'>{loading ? <Spinner /> : 'Login'}</button>
      <span className={styles.footer}>
        Don&apos;t have an account? <Link href='/signup'>Sign Up</Link>
      </span>
    </form>
  );
};

export default LoginForm;
