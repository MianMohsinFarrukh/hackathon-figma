import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart, CiZoomIn } from "react-icons/ci";

const products = [
  { title: "Comfort Handy Craft", price: "42.00", oldPrice: "56.00", image: "/imges/imgaik.png", isNew: true },
  { title: "Modern Yellow Chair", price: "48.00", oldPrice: "66.00", image: "/imges/imgdu.png", isOnSale: true },
  { title: "Elegant White Chair", price: "50.00", oldPrice: "70.00", image: "/imges/imgteen.png" },
  { title: "Luxury Armchair", price: "62.00", oldPrice: "80.00", image: "/imges/imgchr.png", isNew: true },
  { title: "Classic Black Chair", price: "35.00", oldPrice: "45.00", image: "/imges/imgpanch.png" },
  { title: "Wooden Rocking Chair", price: "60.00", oldPrice: "75.00", image: "/imges/img4.png", isOnSale: true },
];

export default function Sectionthree() {
  return (
    <section className="min-h-screen p-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-center text-xl sm:text-xl md:text-2xl mt-4 font-bold text-purple-900 mb-10">
        Latest Products
      </h1>

      {/* Navigation */}
      <div>
        <ul className="flex gap-6">
          <li className="hover:text-pink-400 hover:underline">New Arrival</li>
          <li className="hover:text-pink-400 hover:underline">Best Seller</li>
          <li className="hover:text-pink-400 hover:underline">Featured</li>
          <li className="hover:text-pink-400 hover:underline">Special Offer</li>
        </ul>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-8 w-full max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform relative w-full h-[260px] rounded-md overflow-hidden group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain"
            />

            {/* Icons on Hover */}
            <div className="absolute bottom-14 left-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
                <MdOutlineShoppingCart className="text-xl text-gray-700" />
              </button>
              <button className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
                <CiHeart className="text-xl text-gray-700" />
              </button>
              <button className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
                <CiZoomIn className="text-xl text-gray-700" />
              </button>
            </div>

            {/* Product Details */}
            <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-700">{product.title}</h3>
                <span className="text-blue-500 text-sm font-bold">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}