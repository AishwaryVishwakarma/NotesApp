'use client';

import React from 'react';

import CustomParticles from '../CustomParticles/CustomParticles';
import Navbar from '../Navbar/Navbar';
import {type LayoutProps} from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  showParticles = true,
  particleProps,
  showNavbar = true,
  navbarProps,
  layouted = false,
  queryParams,
}) => {
  return (
    <>
      {showNavbar && (
        <Navbar {...navbarProps} queryParams={queryParams as QueryParams} />
      )}
      <main className={`${className} ${layouted && 'layouted'}`}>
        {children}
        {showParticles && <CustomParticles {...particleProps} />}
      </main>
    </>
  );
};

export default Layout;
