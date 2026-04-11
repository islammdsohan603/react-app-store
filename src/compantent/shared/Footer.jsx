import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-white">Sohan Apps</h1>
            <p className="mt-2 text-sm text-gray-400">
              Building modern and useful applications for everyone 🚀
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p className="text-sm">Email: islammdsohan603@gmail.com</p>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Subscribe</h2>

            <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-transparent outline-none text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sohan Apps. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
