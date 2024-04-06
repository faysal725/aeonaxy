import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <a href="/" className="text-red-600 font-bold text-xl">
              RevenueCat
            </a> */}
            <img src="/logo.png" alt="" className="h-10 w-40"/>
          </div>
          <div className="hidden sm:ml-6 sm:flex">
            <div className="relative ml-3">
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <select
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium outline-none nav-select "
                  >
                    <option value="0">Product</option>
                    <option value="1">Product 1</option>
                    <option value="2">Product 2</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute top-3 right-1 h-3 w-3 " />
                </div>

                <div className="relative group">
                  <select
                    href="#"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium outline-none nav-select "
                  >
                    <option value="0">Docs</option>
                    <option value="1">Doc 1</option>
                    <option value="2">Doc 2</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="absolute top-3 right-0 h-3 w-3 " />
                </div>


                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Customers
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center group">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 pt-2 rounded-md text-sm font-semibold"
              >
                LOGIN
              </a>
              <span className="h-0.5 w-12 border border-red-700/70 group-hover:scale-100 scale-0 transition-all duration-200"></span>
            </div>

            <a
              href="#"
              className="ml-4 px-4 py-2 rounded-full text-sm font-medium bg-indigo-700/80 text-white hover:bg-indigo-700"
            >
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
