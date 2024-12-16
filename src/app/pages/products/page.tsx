"use client";
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image';
export default function Productdetails() {
  return (
    <div>
      <div>
        <Herotopbar
          title="Product Details"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Single Blog", active: true },
          ]}
          titleStyle="text-purple-900 "
          breadcrumbStyle="text-gray-500"
        />
      </div>

      <div className="  py-12 mt-8 mb-10">
        <div className="  container mx-auto px-6 md:px-12">
          {/* Product Overview */}
          <div className=" bg-white p-4 rounded-lg shadow-sm  grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Product Images */}
            <div className="grid grid-cols-2 gap-3">

              <div className="grid grid-rows- pl-4 gap-4">
                <img
                  src="/imges/pic1.png"
                  alt="Product 1"
                  className="w-full h-20 auto rounded-lg"
                />
                <img
                  src="/imges/pic2.png"
                  alt="Product 2"
                  className="w-full  h-20 auto rounded-lg"
                />
                <img
                  src="/imges/pic3.png"
                  alt="Product 3"
                  className="w-full  h-20 auto rounded-lg"
                />

              </div>
              <img
                src="/imges/pic4.png"
                alt="Main Product"
                className="w-auto h-full rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Playwood Arm Chair
              </h2>
              <p className="text-xl font-semibold text-pink-500 mb-4">$250.00</p>
              <p className="text-gray-500 mb-6">
                A modern armchair made from sustainable materials, blending style
                with functionality.
              </p>
              <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
                Add to Cart
              </button>
              <div className="mt-6 text-gray-500">
                <p>
                  <strong>Category:</strong> Furniture
                </p>
                <p>
                  <strong>Tags:</strong> Chair, Living Room
                </p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg mb-16">
            <ul className="flex border-b mb-4 ">
              <li className="mr-6">
                <a
                  href="#description"
                  className="text-purple-900 hover:text-pink-500"
                >
                  Description
                </a>
              </li>
              <li className="mr-6">
                <a href="#info" className="text-purple-900 hover:text-pink-500">
                  Additional Info
                </a>
              </li>
              <li className="mr-6">
                <a href="#reviews" className="text-purple-900 hover:text-pink-500">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#video" className="text-purple-900 hover:text-pink-500">
                  Video
                </a>
              </li>
            </ul>
            <div id="description" className="text-gray-500">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor lobortis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                repellendus perferendis delectus, commodi laudantium aliquid! Quae
                sequi dolorem exercitationem magni temporibus vitae ratione quod,
                sunt neque quo .
              </p>
              <h3 className="text-lg font-bold text-purple-900 mb-2 mt-4">
                More Details
              </h3>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mt-2 flex">
                  <FaArrowRight className="pr-2 mt-1" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores quo, odit dolore a perspiciatis aliquid esse dicta
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Men's Fashion Wear",
                  price: "$150.00",
                  img: "/imges/pr1.png",
                },
                {
                  name: "Women's Fashion",
                  price: "$120.00",
                  img: "/imges/pr2.png",
                },
                {
                  name: "White Dummy Fashion",
                  price: "$99.00",
                  img: "/imges/pr3.png",
                },
                {
                  name: "The Red Digital Clock",
                  price: "$80.00",
                  img: "/imges/pr4.png",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h4 className="text-gray-800 font-bold">{product.name}</h4>
                  <p className="text-pink-500 font-semibold">{product.price}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Image className=" mt-10 mb-14 w-full px-24" width={200} height={400} src="/imges/ema.png" alt='image'></Image>
      </div>
    </div>

  );
}
