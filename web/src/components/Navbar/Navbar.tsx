import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import React from 'react';

import styles from './styles.module.scss';

interface Tab {
  path: string;
  name: string;
  query: Record<string, string | null>;
  isActive: boolean;
}

const Navbar = ({className}: {className?: string}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const userId = searchParams.get('user_id');

  const LEFT_TABS: Tab[] = [
    {
      path: '/home',
      name: 'Home',
      query: {
        user_id: userId,
      },
      isActive: pathname === '/home',
    },
  ];

  const RIGHT_TABS: Tab[] = [
    {
      path: '/profile',
      name: 'Profile',
      query: {
        user_id: userId,
      },
      isActive: pathname === '/profile',
    },
  ];

  return (
    <nav className={`${className} ${styles.navbar} `}>
      <div className={styles.left}>
        <ul>
          {LEFT_TABS.map((tab) => {
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
      </div>
      <p className={styles.heading}>
        <Link
          href={{
            pathname: '/home',
            query: {
              user_id: userId,
            },
          }}
        >
          Notes App
        </Link>
      </p>
      <div className={styles.right}>
        <ul>
          {RIGHT_TABS.map((tab) => {
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
      </div>
    </nav>
  );
};

export default Navbar;
