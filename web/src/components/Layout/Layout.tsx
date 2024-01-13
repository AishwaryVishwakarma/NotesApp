import React, {Suspense} from 'react';

import CustomParticles from '../CustomParticles/CustomParticles';
import Navbar from '../Navbar/Navbar';
import styles from './styles.module.scss';
import {type LayoutProps} from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  showParticles = true,
  particleProps,
  showNavbar = true,
  navbarProps,
  layouted = false,
}) => {
  return (
    <div className={`${styles.layout} ${showNavbar && styles.grid}`}>
      {showNavbar && (
        <header>
          <Suspense fallback={<nav>Navbar</nav>}>
            <Navbar {...navbarProps} />
          </Suspense>
        </header>
      )}
      <main className={`${className} ${layouted && 'layouted'}`}>
        {children}
      </main>
      {showParticles && <CustomParticles {...particleProps} />}
    </div>
  );
};

export default Layout;
