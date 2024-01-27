'use client';

import {clearStorage} from '@/utils/storage';
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import React from 'react';

import styles from './styles.module.scss';

export type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

interface Tab {
  path: string;
  name: string;
  query?: {
    [key: string]: string | null;
  };
  isActive?: boolean;
  onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({...rest}) => {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const user_id = searchParams.get('user_id');

  const TABS: Tab[] = [
    {
      path: '/dashboard',
      name: 'Home',
      query: {
        user_id,
      },
      isActive: pathname === '/dashboard',
    },
    {
      path: '/dashboard/profile',
      name: 'Profile',
      query: {
        user_id,
      },
      isActive: pathname === '/dashboard/profile',
    },
    {
      path: '/',
      name: 'Log Out',
      onClick: (): void => {
        clearStorage(['na-token'], localStorage);
      },
    },
  ];

  return (
    <nav className={styles.navbar} {...rest}>
      <p className={styles.heading}>
        <Link
          href={{
            pathname: '/dashboard',
            query: {
              user_id,
            },
          }}
        >
          Notes App
        </Link>
      </p>
      <ul>
        {TABS.map((tab) => {
          const {path, name, query, isActive, onClick} = tab;
          return (
            <li key={name} className={styles.tab}>
              <Link
                href={{
                  pathname: path,
                  query,
                }}
                className={isActive ? styles.active : ''}
                onClick={onClick}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
