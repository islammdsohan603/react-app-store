import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const App = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setApps(data));
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          All Apps
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {apps.map(app => (
            <div
              key={app.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 rounded-xl object-cover mx-auto"
              />

              <h2 className="text-center mt-3 font-semibold text-gray-800">
                {app.title}
              </h2>

              <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-500">
                <span>⬇ {app.downloads}</span>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  {app.ratingAvg}
                </div>
              </div>

              <Link
                to={`/apps/${app.id}`}
                className="block mt-4 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
