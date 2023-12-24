'use client';

import Eye from '@/assets/icons/Eye';
import EyeClosed from '@/assets/icons/EyeClosed';
import Spinner from '@/assets/icons/loaders/Spinner/Spinner';
import {setStorage} from '@/utils/storage';
import axios from 'axios';
import React from 'react';

import styles from './styles.module.scss';

const SignupForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
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

    const {firstName, lastName, email, password} = formData;

    const payload = {
      name: firstName + lastName,
      email,
      password,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}signup`, payload)
      .then((res) => {
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
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles.nameField}>
        <div className={styles.inputField}>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            autoComplete='given-name'
            onChange={onChangeHandler}
            value={formData.firstName}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            autoComplete='family-name'
            onChange={onChangeHandler}
            value={formData.lastName}
            required
          />
        </div>
      </div>
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
      <button type='submit'>{loading ? <Spinner /> : 'Sign Up'}</button>
    </form>
  );
};

export default SignupForm;