'use client';

import {
  type FormDetails,
  setProfile,
  updateProfile,
} from '@/redux/features/profileSlice';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import {isNull, isValidString} from '@/utils';
import {getStorage} from '@/utils/storage';
import axios from 'axios';
import {useRouter, useSearchParams} from 'next/navigation';
import React from 'react';

let authToken: string | null;

const useUser = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();

  const {
    profile: {name, email},
    isEmpty,
  } = useAppSelector((state) => state.profile);

  const userId = searchParams.get('user_id');

  const [loading, setLoading] = React.useState(isEmpty);

  if (typeof window !== 'undefined') {
    [authToken] = getStorage(['na-token'], localStorage);
  }

  const isValidUser = isValidString(userId) && !isNull(authToken);

  function update(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: {name, value},
    } = event;
    dispatch(
      updateProfile({
        name: name as FormDetails['name'],
        value,
      })
    );
  }

  React.useEffect(() => {
    if (!isValidUser) {
      router.replace('/');
      return;
    }

    if (isValidString(name) && isValidString(email)) return;

    axios
      .post(
        `${process.env.NEXT_PUBLIC_HOST}user`,
        {
          user_id: userId,
          message: 'Get user information',
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((res) => {
        const {name, email} = res.data;
        dispatch(setProfile({name, email}));
        setLoading(false);
      })
      .catch(() => {
        router.replace('/');
      });
  }, [isValidUser, userId, router, name, email, dispatch]);

  return {
    loading,
    profile: {
      name,
      email,
    },
    update,
  };
};

export default useUser;
