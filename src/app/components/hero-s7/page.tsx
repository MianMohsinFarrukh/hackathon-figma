import React from "react";

const DiscountSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-6 md:flex-row items-center justify-center gap-10 p-16 ">
      {/* Left Content */}
      <div className="text-center md:text-left">
      <h2 className="text-2xl font-bold text-purple-900  text-end mr-16">Discount Item</h2>
        <nav className="flex justify-center md:justify-end space-x-3 text-purple-900 mt-2 mb-16">
          <a href="" className="hover:underline hover:text-pink-500">Wood Chair</a>
          <a href="" className="hover:underline hover:text-pink-500">Plastic Chair</a>
          <a href="" className="hover:underline hover:text-pink-500">Sofa Collection</a>
        </nav>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-4">
          20% Discount On All Products
        </h2>
        <h3 className="text-pink-600 font-semibold mt-2">Eams Sofa Compact</h3>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <ul className="list-none mt-6 space-y-2 text-gray-700">
          <li>✔️ Material expose like metals</li>
          <li>✔️ Clear lines and geometric figures</li>
          <li>✔️ Simple neutral colours</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold  hover:bg-pink-600">
          Shop Now
        </button>
      </div>

      {/* Right Content */}
      <div className="flex justify-center">
        <div className="w-80 h-80 rounded-full bg-pink-100 flex items-center justify-center">
          <img
            src="/imges/side.png"
            alt="Eams Sofa"
            className="object-contain w-72 h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
