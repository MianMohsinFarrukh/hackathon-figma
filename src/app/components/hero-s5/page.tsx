// Import necessary dependencies
import React from 'react';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

const SectionFive: React.FC = () => {
  return (
    <section className="bg-purple-100 py-10 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image 
            className="" 
            width={200} 
            height={200} 
            src="/imges/group.png" 
            alt="Product Image"
          />
        </div>

        {/* Features Card Section */}
        <div className=" p-6  max-w-lg">
          {/* Title Section */}
          <h2 className="text-xl font-bold text-purple-900 mb-4">
            Unique Features Of Latest & Trending Products
          </h2>

          {/* Features List */}
          <ul className="space-y-2 text-purple-800">
            <li className="flex items-center">
              <span className="h-3 w-3 bg-pink-500 rounded-full mr-2"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center">
              <span className="h-3 w-3 bg-blue-500 rounded-full mr-2"></span>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </li>
            <li className="flex items-center">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          {/* Footer Section */}
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-pink-600">
              <FaCartPlus className="mr-2" /> Add To Cart
            </button>
            <div className="text-purple-900 font-semibold">
              <div>B&B Italian Sofa</div>
              <div className="text-gray-600">$32.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;