import React from 'react';

const Stats = () => {
  return (
    <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-4xl font-bold">1.2M+</h2>
            <p className="mt-2 text-sm opacity-80">Apps Downloaded</p>
          </div>

          {/* Item 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-4xl font-bold">906K</h2>
            <p className="mt-2 text-sm opacity-80">Total Score</p>
          </div>

          {/* Item 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-4xl font-bold">132+</h2>
            <p className="mt-2 text-sm opacity-80">Active Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
