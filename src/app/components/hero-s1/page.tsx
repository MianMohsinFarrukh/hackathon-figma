'use client'; // This marks the component as a client-side component

import React, { useState } from 'react';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/imges/first.png',
    '/images/slider2.jpg',
    '/images/slider3.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative  w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Left Navigation button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
      >
        &#60;
      </button>

      {/* Right Navigation button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
      >
        &#62;
      </button>
    </div>
  );
};

export default HeroSlider;
