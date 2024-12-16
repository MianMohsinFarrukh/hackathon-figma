import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const TopBar: React.FC = () => {
  return (
    <div className="bg-purple-600 text-white px-4 py-2 flex flex-wrap items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-6 flex-wrap sm:flex-nowrap ml-6">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lg" />
          <span className="text-sm">mhhasanul@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lg" />
          <span className="text-sm">(12345) 67890</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0 justify-center sm:justify-start w-full sm:w-auto">
        <select
          className="bg-transparent text-white text-sm outline-none hover:bg-purple-700 px-2 py-1 rounded-md mt-2 sm:mt-0"
          aria-label="Select language"
        >
          <option value="en" className="text-black">
            English
          </option>
          <option value="es" className="text-black">
            Español
          </option>
          <option value="ur" className="text-black">
            Urdu
          </option>
        </select>
        <select
          className="bg-transparent text-white text-sm outline-none hover:bg-purple-700 px-2 py-1 rounded-md mt-2 sm:mt-0"
          aria-label="Select currency"
        >
          <option value="usd" className="text-black">
            USD
          </option>
          <option value="pkr" className="text-black">
            PKR
          </option>
          <option value="eur" className="text-black">
            EUR
          </option>
        </select>
        <span className="text-sm flex items-center cursor-pointer hover:text-gray-300 mt-2 sm:mt-0">
          <Link href="/pages/loginpage">Login</Link>  <AiOutlineUser className="ml-1" />
        </span>
        <span className="text-sm flex items-center cursor-pointer hover:text-gray-300 mt-2 sm:mt-0">
          <Link href="/pages/wishlist-shoplist">Wishlist</Link>  <IoHeartOutline className="ml-1" />
        </span>
        <span className="text-xl cursor-pointer hover:bg-purple-900 p-1 rounded-full mt-2 sm:mt-0">
          <Link href="/pages/ordercomplete"><MdOutlineShoppingCart /></Link>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
