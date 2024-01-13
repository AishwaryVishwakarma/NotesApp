'use client';

import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import React from 'react';

import styles from './styles.module.scss';

export type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

interface Tab {
  path: string;
  name: string;
  query: {
    [key: string]: string | null;
  };
  isActive: boolean;
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
      isActive: pathname === '/home',
    },
    {
      path: '/dashboard/profile',
      name: 'Profile',
      query: {
        user_id,
      },
      isActive: pathname === '/profile',
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
          const {path, name, query, isActive} = tab;
          return (
            <li key={name} className={styles.tab}>
              <Link
                href={{
                  pathname: path,
                  query,
                }}
                className={isActive ? styles.active : ''}
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
