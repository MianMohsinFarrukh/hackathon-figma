"use client";
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'

export default function Contactpage() {
    return (
        <div>
            <div>
                <Herotopbar
                    title="Contact Us"
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Pages", path: "/pages" },
                        { name: "Contact Us", active: true },
                    ]}
                    titleStyle='text-purple-900 '
                />
            </div>

            <div className=" py-12 mt-8 mb-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Information & Contact Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Information About Us */}
          <div>
            <h2 className="text-2xl font-bold text-purple-900  mb-4">
              Information About Us
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor lobortis.
              Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex space-x-4">
              <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
              <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className="text-2xl font-bold text-purple-900  mb-4">
              Contact Way
            </h2>
            <ul className="text-gray-500 space-y-4">
              <li>
                📞 <span className="text-black">Tel:</span> 877-47-48-99
              </li>
              <li>
                ✉️ <span className="text-black">E-Mail:</span> shop@store.com
              </li>
              <li>
                📍 20 Margaret St, London, Great Britain, 3NM-98-LK
              </li>
              <li>📦 Free standard shipping on all orders.</li>
            </ul>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-purple-900  mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor lobortis.
              Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Type Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-md">
                Send Mail
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="flex justify-center">
            <img
              src="/imges/grp.png"
              alt="Contact Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  

            
        </div>

    )
}
