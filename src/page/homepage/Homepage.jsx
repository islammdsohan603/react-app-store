import React from 'react';
import Banner from '../../compantent/BannerPage/Banner';
import TrandingApp from '../../compantent/BannerPage/TrendingApps';
import Stats from '../../compantent/BannerPage/Stats';
import { ToastContainer } from 'react-toastify';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <TrandingApp />
      <ToastContainer />
    </>
  );
};

export default Homepage;
