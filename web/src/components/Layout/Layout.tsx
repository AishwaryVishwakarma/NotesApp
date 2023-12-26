'use client';

import React from 'react';

import Navbar from '../Navbar/Navbar';

// import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  navbarStyles?: string;
  footerStyles?: string;
  navbar?: boolean;
  footer?: boolean;
  layouted?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  navbarStyles,
  footerStyles,
  navbar = true,
  footer = true,
  layouted = false,
}) => {
  return (
    <>
      {navbar && <Navbar className={navbarStyles} />}
      <main className={`${className} ${layouted && 'layouted'}`}>
        {children}
      </main>
      {/* {footer && <Footer className={footerStyles} />} */}
    </>
  );
};

export default Layout;
