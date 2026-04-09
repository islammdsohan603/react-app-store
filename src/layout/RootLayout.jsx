import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../compantent/shared/Footer';
import Navbar from '../compantent/shared/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
