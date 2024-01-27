import React from 'react';

import styles from './styles.module.scss';

export interface SkeletonProps {
  config: {
    id: string;
    style: React.CSSProperties;
    duration?: number;
  }[];
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({config = [], className}) => {
  return (
    <div className={className}>
      {config.map((ele) => {
        const {id, style, duration = 1.5} = ele;
        return (
          <div key={id} style={style} className={styles.loadingElement}>
            <span
              style={{
                animationDuration: `${duration}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Skeleton;
