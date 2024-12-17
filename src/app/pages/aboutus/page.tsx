"use client";
import Sectionfour from '@/app/components/hero-s4/page'
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
export default function Aboutus() {
  return (
    <div>
      <div><Herotopbar
        title="About Us"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pages", path: "/pages" },
          { name: "About Us", active: true },
        ]}
        titleStyle="text-purple-900 "
        breadcrumbStyle="text-gray-500"
      />
      </div>

      <div className=" mt-16 mb-8 flex flex-col lg:flex-row items-center justify-center  px-16  max-w-6xl mx-auto">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src="/imges/leftimg.png"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Text and Button */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Mauris morbi sed faucibus.
            Accumsan faucibus vitae lobortis enim tincidunt blandit quam.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
            Contact Us
          </button>
        </div>
      </div>

      <div>
        <Sectionfour />
      </div>

      <section className="flex items-center justify-center h-auto md:mb-24 mb-14 bg-purple-50 px-2">
        <div className="max-w-4xl text-center p-10  ">
          <h2 className="text-2xl md:text-4xl font-bold text-purple-800 mb-6">
            Our Client Say!
          </h2>

          {/* Testimonial Avatar & Text */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center space-x-4">
              <img
                src="/imges/m1.png"
                alt="Client"
                className="w-16 h-16  border-2 "
              />
              <img
                src="/imges/m2.png"
                alt="Client"
                className="w-16 h-16 mb-6 border-2 "
              />
              <img
                src="/imges/m3.png"
                alt="Client"
                className="w-16 h-16  border-2 "
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Selina Gomez
              </h3>
              <p className="text-gray-500 text-sm">Our Valued Client</p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-6 text-gray-600">
            <FaQuoteLeft className="inline-block text-pink-500 text-2xl mr-2" />
            <p className="inline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui
              ultricies quam vel odio sollicitudin. Nam vitae a enim nunc, sed
              sapien egestas ac nunc.
            </p>
            <FaQuoteRight className="inline-block text-pink-500 text-2xl ml-2" />
          </div>

          {/* Decoration */}
          <div className="mt-4">
            <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
