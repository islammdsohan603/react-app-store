import React from 'react';
import { NavLink } from 'react-router-dom';

const MynavLink = ({ to, children }) => {
  return (
    <NavLink to={to} className="relative group text-black">
      {({ isActive }) => (
        <>
          <span
            className={`transition-colors duration-300 ${
              isActive ? 'text-red-600' : 'group-hover:text-red-500'
            }`}
          >
            {children}
          </span>

          {/* underline */}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-red-600 transition-all duration-300 
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          ></span>
        </>
      )}
    </NavLink>
  );
};

export default MynavLink;
