import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Install = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('installedApps')) || [];
    setApps(data);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Installed Apps
        </h1>

        {apps.length === 0 ? (
          <p className="text-center mt-10 text-gray-500">
            No apps installed yet
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {apps.map(app => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 mx-auto rounded-xl"
                />

                <h2 className="text-center mt-3 font-semibold">{app.title}</h2>

                <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
                  <span>⬇ {app.downloads}</span>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    {app.ratingAvg}
                  </div>
                </div>

                <Link
                  to={`/apps/${app.id}`}
                  className="block mt-4 text-center bg-indigo-600 text-white py-2 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Install;
