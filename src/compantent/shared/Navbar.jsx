import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import MynavLink from './MynavLink';

const Navbar = () => {
  return (
    <div>
      <header className="bg-base-100 shadow-2xs py-4">
        <nav className="flex items-center justify-between w-10/12 mx-auto">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <ul className=" flex items-center gap-6">
            <li>
              <MynavLink to="/">Home</MynavLink>
            </li>
            <li>
              <MynavLink to="/app">Apps</MynavLink>
            </li>
            <li>
              <MynavLink to="/installedApps">Install</MynavLink>
            </li>
          </ul>

          <button className="btn btn-accent px-6 py-1.5 ">
            <FaGithub /> Contribute
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
