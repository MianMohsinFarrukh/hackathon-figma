"use client";
import Sectionfour from '@/app/components/hero-s4/page'
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import Image from 'next/image';
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


      <div className='md:w-full  h-auto pb-8 bg-purple-100 mb-28 px-24 text-center items-center'>
        <div className='pt-8'>
          <span className='text-lg text-purple-800 font-bold'>Our Client Say!</span>
          <div className="ml-96 pl-8">
            <Image className=" mt-4 mb-4 " width={100} height={100} src="/imges/mix.png" alt='image'></Image>
          </div>
          <h3 className='text-md text-purple-800 font-bold'>Selina Gomez</h3>
          <h5 className='text-sm text-black font-bold'>Ceo At Webecy Digital</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis minima itaque eveniet modi, nam, minus, sed sunt quis quia nihil rem fugiat odio provident dolore saepe enim excepturi! Officia!</p>

          <div className='md:ml-56 ml-14 mt-4 flex md:px-52 '>
            <div className='w-4 p-1 bg-pink-500'></div>
            <div className='w-4 p-1 ml-3 bg-pink-300'></div>
            <div className='w-4 p-1 ml-3 bg-pink-300'></div>
          </div>




        </div>

      </div>






    </div>
  )
}
