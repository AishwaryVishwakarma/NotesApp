import React from 'react';

import styles from './styles.module.scss';

const Navbar = ({className}: {className?: string}) => {
  return (
    <nav className={`${className} ${styles.navbar} `}>
      <p className={styles.heading}>Notes App</p>
    </nav>
  );
};

export default Navbar;
