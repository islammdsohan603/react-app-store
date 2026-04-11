import React from 'react';
import Banner from '../../compantent/BannerPage/Banner';
import TrandingApp from '../../compantent/BannerPage/TrendingApps';
import Stats from '../../compantent/BannerPage/Stats';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <TrandingApp />
    </>
  );
};

export default Homepage;
