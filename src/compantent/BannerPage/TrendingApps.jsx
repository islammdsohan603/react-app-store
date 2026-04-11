import { Star } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

const TrendingApps = () => {
  const [apps, setApps] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 1200);
    };

    fetchData();
  }, []);

  const handleVisibletiy = () => {
    setVisible(true);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Trending Apps
        </h1>
        <p className="text-center text-gray-500 mt-2">
          জনপ্রিয় ও ট্রেন্ডিং অ্যাপস দেখুন
        </p>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center mt-16">
            <GridLoader size={15} color="#6366f1" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {apps.slice(0, 6).map(app => (
              <div
                key={app.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between"
              >
                {/* Top */}
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-16 h-16 rounded-xl object-cover "
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {app.title}
                    </h2>

                    <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                      <span>⬇ {app.downloads}</span>

                      <div className="flex items-center gap-1 text-yellow-500 font-medium">
                        <Star size={16} fill="currentColor" />
                        {app.ratingAvg}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link
                  onClick={handleVisibletiy}
                  to={`/apps/${app.id}`}
                  className="mt-5 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition"
                >
                  View Details
                </Link>
              </div>
            ))}

            <div className="mx-auto">
              <Link to={`/app`} className="btn btn-error ">
                Show All Apps
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingApps;
