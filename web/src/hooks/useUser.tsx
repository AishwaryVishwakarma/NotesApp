'use client';

import {isNull} from '@/utils';
import {getStorage} from '@/utils/storage';
import {useRouter, useSearchParams} from 'next/navigation';
import React from 'react';

let authToken: string | null;

const useUser = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [loading, setLoading] = React.useState(true);

  const userId = searchParams.get('user_id');

  if (typeof window !== 'undefined') {
    [authToken] = getStorage(['token'], localStorage);
  }

  const isValidUser = !isNull(userId) && !isNull(authToken);

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
