import React from 'react';
import bannerImage from '../../assets/hero (1).png';

const Banner = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-center bg-linear-to-r from-blue-500 to-purple-600 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the App Store</h1>
      <p className="text-lg mb-6">Discover the best apps for your needs.</p>
      <div className="mb-4">
        <button className="btn btn-primary mr-4">Explore Apps</button>
        <button className="btn btn-secondary">Learn More</button>
      </div>
      <img src={bannerImage} alt="Banner" className="w-full max-w-2xl" />
    </div>
  );
};

export default Banner;
