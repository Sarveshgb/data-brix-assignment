import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex">
      <nav className="w-1/6 h-screen bg-gray-800 p-6">
        <ul className="text-white">
          <li className="mb-4">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/about" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
