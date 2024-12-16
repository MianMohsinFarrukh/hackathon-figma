import Herotopbar from "@/app/components/hero-top-bar/HeroTopBar";
import React from "react";
import { CiHeart, CiZoomIn } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Endimg from "@/app/components/endimg/page";
const products = [
  {
    id: 1,
    title: "Accumsan tincidunt",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 4.5,
    image: "/imges/myimg1.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
  },
  {
    id: 2,
    title: "In nulla",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 4,
    image: "/imges/myimg2.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
  },
  {
    id: 3,
    title: "In nulla",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 4,
    image: "/imges/myimg3.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
    
  },
  
  {
    id: 4,
    title: "In nulla",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 3,
    image: "/imges/myimg4.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
    
  },
  {
    id: 5,
    title: "In nulla",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 4.5,
    image: "/imges/myimg5.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
    
  },
  {
    id: 6,
    title: "In nulla",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 3.5,
    image: "/imges/myimg6.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
    
  },
  
  {
    id: 7,
    title: "In nulla",
    price: "$26.00",
    discountPrice: "$16.00",
    rating: 4,
    image: "/imges/myimg7.png",
    colors: ["#facc15", "#ef4444", "#3b82f6"],
    
  },
  // Add other product objects here...
];

// Function to render star ratings
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <span key={index} className="text-yellow-500 text-sm">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="text-yellow-500 text-sm">★</span>}
      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
        <span key={index} className="text-gray-300 text-sm">
          ★
        </span>
      ))}
    </div>
  );
};

export default function Shoplist() {
  return (
    <div>
      {/* Hero Top Bar */}
      <Herotopbar
        title="Shop List"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Pages", path: "/pages" },
          { name: "Shop List", active: true },
        ]}
        titleStyle="text-purple-900"
        breadcrumbStyle="text-gray-500"
      />

      {/* Page Header Section */}
<div className="container mx-auto px-4 py-10 flex flex-wrap justify-between items-center border-b border-gray-200 gap-4 md:gap-0">
  {/* Title */}
  <div className="w-full md:w-auto">
    <h2 className="text-2xl font-bold text-indigo-800 text-center md:text-left">
      Ecommerce Accessories & Fashion Item
    </h2>
    <p className="text-sm text-gray-500 text-center md:text-left">
      About 94,620 results (0.62 seconds)
    </p>
  </div>

  {/* Filter Controls */}
  <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-4 w-full md:w-auto">
    {/* Per Page */}
    <div className="flex items-center space-x-2">
      <label className="text-gray-600 text-sm">Per Page:</label>
      <input
        type="text"
        className="border border-gray-300 rounded px-2 py-1 text-sm w-12 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder="10"
      />
    </div>

    {/* Sort By */}
    <div className="flex items-center space-x-2">
      <label className="text-gray-600 text-sm">Sort By:</label>
      <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500">
        <option>Best Match</option>
        <option>Lowest Price</option>
        <option>Highest Price</option>
        <option>Newest</option>
      </select>
    </div>

    {/* View Toggle */}
    <div className="flex items-center space-x-2">
      <label className="text-gray-600 text-sm">View:</label>
      <div className="flex space-x-2">
        <button className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-200 focus:ring-1 focus:ring-indigo-500">
          ▦
        </button>
        <button className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-200 focus:ring-1 focus:ring-indigo-500">
          ☰
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Product Listing Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg flex overflow-hidden"
            >
              {/* Product Image */}
              <a href="#" className="w-1/3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </a>

              {/* Product Details */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  {/* Product Name */}
                  <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-lg font-bold text-gray-800">
                      {product.title}
                    </h2>
                    {/* Colored Circles */}
                    <div className="flex space-x-1">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Ratings */}
                  <div className="flex items-center space-x-2 mb-3">
                    <p className="text-sm font-semibold text-gray-800">
                      <span className="line-through text-gray-400 mr-2">
                        {product.price}
                      </span>
                      <span className="text-pink-500">{product.discountPrice}</span>
                    </p>
                    <StarRating rating={product.rating} />
                  </div>

                  {/* Additional Description */}
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-sm text-gray-600">
                    Magna in est adipiscing in phasellus non in justo.
                  </p>
                </div>

                {/* Action Icons */}
                <div className="flex items-center mt-4 text-gray-500 space-x-4">
                  <a href="#" className="hover:text-pink-500 hover:bg-slate-50 p-2">
                  <MdOutlineShoppingCart />
                  </a>
                  <a href="#" className="hover:text-pink-500  hover:bg-slate-50 p-2">
                  <CiHeart />
                  </a>
                  <a href="#" className="hover:text-pink-500  hover:bg-slate-50 p-2">
                  <CiZoomIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>

      
      <Endimg/>
      </div>
    </div>
  );
}
