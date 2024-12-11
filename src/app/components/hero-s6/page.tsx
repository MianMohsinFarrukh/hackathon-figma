// Import necessary dependencies
import React from 'react';
import Image from 'next/image';

const productData = [
  {
    name: "Cantilever Chair",
    imageSrc: "/imges/img1.png",
    originalPrice: 42.00,
    discountedPrice: 26.00,
    
  },
  {
    name: "Cantilever Chair",
    imageSrc: "/imges/img2.png",
    originalPrice: 42.00,
    discountedPrice: 26.00,
  },
  {
    name: "Cantilever Chair",
    imageSrc: "/imges/img3.png",
    originalPrice: 42.00,
    discountedPrice: 26.00,
  },
  {
    name: "Cantilever Chair",
    imageSrc: "/imges/imgaik.png",
    originalPrice: 42.00,
    discountedPrice: 26.00,
  }
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="py-10 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">Trending Products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <Image 
                className="rounded-lg bg-gray-100" 
                width={150} 
                height={150} 
                src={product.imageSrc} // Dynamically use image path from data
                alt={`Cantilever Chair ${idx + 1}`}
                
              />
              <h3 className="text-lg font-semibold text-purple-800 mt-4">{product.name}</h3>
              <p className="text-purple-600">${product.discountedPrice}</p>
              <p className="line-through text-gray-400">${product.originalPrice}</p>
            </div>
          ))}
        </div>

        {/* Promotions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {/* First Promotion */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-pink-600 mb-8 mt-3">23% off in all products</h3>
              <a href="#" className="text-pink-500 underline">Shop Now</a>
            </div>
            <Image 
              className="mt-4 rounded-lg ml-16 mb-6" 
              width={150} 
              height={150} 
              src="/imges/clock.png" // Fixed image path
              alt="Promotion 1"
            />
          </div>

          {/* Second Promotion */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-8 mt-3">23% off in all products</h3>
              <a href="#" className="text-purple-600 underline">View Collection</a>
            </div>
            <Image 
              className="mt-4 rounded-lg ml-16 mb-6" 
              width={150} 
              height={150} 
              src="/imges/desk.png" // Fixed image path
              alt="Promotion 2"
            />
          </div>

          {/* Executive Chair Section */}
          <div className=" p-6 mt-1
          ">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Executive Seat Chair</h3>
            <ul className="space-y-2">
              {Array.from({ length: 3 }).map((_, idx) => (
                <li key={idx} className="flex items-center justify-between p-2 rounded-md">
                  <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <Image 
                      className="rounded-lg mr-4" 
                      width={50} 
                      height={50} 
                      src={
                        idx === 0 ? "/imges/img1.png" : 
                        idx === 1 ? "/imges/img2.png" : "/imges/img3.png"
                      } 
                      alt={`Executive Chair ${idx + 1}`}
                    />
                  </div>
                  <span className='ml-1'>Executive Seat Chair</span>
                  <span className="text-purple-600">$32.00</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
