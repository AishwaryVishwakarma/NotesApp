'use client';

import {isNull, isValidString} from '@/utils';
import {getStorage} from '@/utils/storage';
import {useRouter} from 'next/navigation';
import React from 'react';

let authToken: string | null;

const useUser = (userId: string | undefined) => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);

  if (typeof window !== 'undefined') {
    [authToken] = getStorage(['token'], localStorage);
  }

  const isValidUser = isValidString(userId) && !isNull(authToken);

  React.useEffect(() => {
    if (!isValidUser) {
      router.replace('/');
    }
  }, [isValidUser, router]);

  return {
    loading,
  };
};

export default useUser;
