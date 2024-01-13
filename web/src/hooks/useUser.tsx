'use client';

import {
  FormDetails,
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

  const {
    profile: {name, email},
    isEmpty,
  } = useAppSelector((state) => state.profile);

  const searchParams = useSearchParams();

  const userId = searchParams.get('user_id');

  const [loading, setLoading] = React.useState(isEmpty);

  if (typeof window !== 'undefined') {
    [authToken] = getStorage(['token'], localStorage);
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
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((res) => {
        const {name, email} = res.data;
        setLoading(false);
        dispatch(setProfile({name, email}));
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
