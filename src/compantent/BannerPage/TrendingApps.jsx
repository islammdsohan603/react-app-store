import { Star } from 'lucide-react';
import React, { useEffect } from 'react';
import { GridLoader } from 'react-spinners';

const TrendingApps = () => {
  const [apps, setApps] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 1500); // Simulate loading delay
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Trending Apps
        </h1>
        <p className="text-center text-gray-500 mt-2">
          জনপ্রিয় ও ট্রেন্ডিং অ্যাপস দেখুন
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {apps.map(apps => (
            <div
              key={apps.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex items-center gap-4 cursor-pointer"
            >
              {/* Image */}
              <img
                src={apps.image}
                alt={apps.name}
                className="w-16 h-16 rounded-xl object-cover  "
              />

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {apps.title}
                </h2>

                {/* Stats */}
                <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                  <span>⬇ {apps.downloads}</span>

                  <div className="flex items-center gap-1 text-yellow-500 font-medium">
                    <Star size={16} fill="currentColor" />
                    {apps.ratingAvg}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="col-span-full text-center text-gray-500 text-lg font-semibold my-4">
              <GridLoader />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
