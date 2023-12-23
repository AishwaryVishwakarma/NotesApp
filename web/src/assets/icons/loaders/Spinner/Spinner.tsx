import React from 'react';
import styles from './styles.module.scss';

const Spinner = ({className}: {className?: string}) => {
  return (
    <div className={`${styles.spinner} ${className}`} />
  );
};

export default Spinner;
