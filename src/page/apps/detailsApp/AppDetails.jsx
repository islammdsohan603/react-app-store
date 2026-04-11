import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const singleApp = data.find(item => item.id == id);
        setApp(singleApp);
      });
  }, [id]);

  if (!app) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading App Details...
      </div>
    );
  }

  const handleInstall = app => {
    const existing = JSON.parse(localStorage.getItem('installedApps')) || [];
    const alreadyInstalled = existing.find(item => item.id === app.id);
    if (alreadyInstalled) {
      toast.error('This app is already installed!');
      return;
    }
    const updated = [...existing, app];
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast.success('App installed successfully!');
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Top Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition">
          {/* Image */}
          <div className="flex justify-center md:block">
            <img
              src={app.image}
              alt={app.title}
              className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover border shadow-sm hover:scale-105 transition"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {app.title}
            </h1>

            <p className="text-gray-500 mt-1">
              {app.category || 'Productivity App'}
            </p>

            {/* Rating + Downloads */}
            <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1 text-yellow-500 font-medium">
                <Star size={18} fill="currentColor" />
                {app.ratingAvg}
              </div>

              <span className="font-medium">⬇ {app.downloads} Downloads</span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => handleInstall(app)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition shadow"
              >
                Install
              </button>

              <button className="border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-lg text-sm font-medium transition">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            About this app
          </h2>
          <p className="text-gray-600 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
