"use client"; // Add this directive at the top

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Importing the icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu on mobile
  };

  return (
    <header className="bg-white text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">Hekto</h1>

        {/* Search Bar for Mobile */}
        <div className="flex md:hidden ml-14 items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-32 px-3 py-1 text-black outline outline-2 outline-offset-2 ... rounded-md focus:outline"
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className={`text-black hover:text-pink-300 ${activeLink === "home" ? "text-pink-500" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home <IoIosArrowDown className="inline-block ml-1" />
          </a>
          <a
            href="#"
            className={`text-black hover:text-pink-300 ${activeLink === "pages" ? "text-pink-500" : ""}`}
            onClick={() => handleLinkClick("pages")}
          >
            Pages <IoIosArrowDown className="inline-block ml-1" />
          </a>
          <a
            href="#"
            className={`text-black hover:text-pink-300 ${activeLink === "products" ? "text-pink-500" : ""}`}
            onClick={() => handleLinkClick("products")}
          >
            Products <IoIosArrowDown className="inline-block ml-1" />
          </a>
          <a
            href="#"
            className={`text-black hover:text-pink-300 ${activeLink === "blog" ? "text-pink-500" : ""}`}
            onClick={() => handleLinkClick("blog")}
          >
            Blog <IoIosArrowDown className="inline-block ml-1" />
          </a>
          <a
            href="#"
            className={`text-black hover:text-pink-300 ${activeLink === "shop" ? "text-pink-500" : ""}`}
            onClick={() => handleLinkClick("shop")}
          >
            Shop <IoIosArrowDown className="inline-block ml-1" />
          </a>
          <a
            href="#"
            className={`text-black hover:text-pink-300 ${activeLink === "contact" ? "text-pink-500" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact <IoIosArrowDown className="inline-block ml-1" />
          </a>
        </nav>

        {/* Desktop Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 px-4 py-2 h-8 pb-1  outline outline-2 outline-offset-2 ... rounded-l-md focus:outline text-black"
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 mt-1 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-purple-300 text-white z-50 transition-all transform translate-y-full">
          <nav className="flex flex-col ml-6 py-1 ">
            <a
              href="#"
              className="text-black hover:text-pink-300"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-300"
              onClick={() => handleLinkClick("pages")}
            >
              Pages
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-300"
              onClick={() => handleLinkClick("products")}
            >
              Products
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-300"
              onClick={() => handleLinkClick("blog")}
            >
              Blog
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-300"
              onClick={() => handleLinkClick("shop")}
            >
              Shop
            </a>
            <a
              href="#"
              className="text-black hover:text-pink-300"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;