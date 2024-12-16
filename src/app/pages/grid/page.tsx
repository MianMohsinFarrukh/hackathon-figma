"use client";
import Endimg from '@/app/components/endimg/page';
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import Pageheadersec from '@/app/components/pageheadersec/page';
import React from 'react'
import { CiHeart, CiZoomIn } from 'react-icons/ci';
import { FiMinus } from 'react-icons/fi';
import { MdOutlineShoppingCart } from 'react-icons/md';
// Define product type
type Product = {
    id: number;
    name: string;
    image: string;
    code: string;
    price: string;
};

// Product data
const products: Product[] = [
    {
        id: 1,
        name: "Product One",
        image: "/imges/img1.png", // Replace with actual paths
        code: "#P12345",
        price: "$25.00",
    },
    {
        id: 2,
        name: "Product Two",
        image: "/imges/img2.png",
        code: "#P67890",
        price: "$30.00",
    },
    {
        id: 3,
        name: "Product Three",
        image: "/imges/img3.png",
        code: "#P54321",
        price: "$45.00",
    },
    {
        id: 4,
        name: "Product Four",
        image: "/imges/img4.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 5,
        name: "Product Four",
        image: "/imges/g1.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 6,
        name: "Product Four",
        image: "/imges/imgchr.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 7,
        name: "Product Four",
        image: "/imges/pic1.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 8,
        name: "Product Four",
        image: "/imges/g4.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 9,
        name: "Product Four",
        image: "/imges/imgpanch.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 10,
        name: "Product Four",
        image: "/imges/img3.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 11,
        name: "Product Four",
        image: "/imges/pic3.png",
        code: "#P98765",
        price: "$50.00",
    },
    {
        id: 12,
        name: "Product Four",
        image: "/imges/imgaik.png",
        code: "#P98765",
        price: "$50.00",
    },
];
export default function Grid() {
    return (
        <div>
            <div>
                <Herotopbar
                    title="Grid Default"
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Pages", path: "/pages" },
                        { name: "Grid Default", active: true },
                    ]}
                    titleStyle="text-purple-900 "
                    breadcrumbStyle="text-gray-500"
                />
            </div>

            <div className='mt-8' >
                <Pageheadersec />
            </div>
            <section className="min-h-screen p-6 flex flex-col items-center">
                <div className='mt-8'>
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg justify-items-center">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-[#F6F7FB] shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 w-full max-w-[250px] text-center relative group"
                            >
                                {/* Image with Hover Effect */}
                                <div className="w-full h-[180px] bg-slate-300 flex items-center justify-center relative group">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-auto h-full object-contain"
                                    />
                                    {/* Hover Icons */}
                                    <div className="absolute top-2 left-2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <MdOutlineShoppingCart className="text-2xl text-gray-700 hover:text-black" />
                                        <CiHeart className="text-2xl text-gray-700 hover:text-red-500" />
                                        <CiZoomIn className="text-2xl text-gray-700 hover:text-blue-500" />
                                    </div>
                                    {/* View Details Button */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-green-600 text-white py-1 px-4 rounded-full text-sm hover:bg-green-500">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                {/* Details */}
                                <div className="p-4 hover:bg-blue-600">
                                    {/* Name */}
                                    <h2 className="text-pink-500 text-lg font-semibold mb-2">
                                        {product.name}
                                    </h2>
                                    {/* Line Icon */}
                                    <div className="flex items-center justify-center text-gray-400 my-2">
                                        <FiMinus className="text-xl" />
                                    </div>
                                    {/* Code */}
                                    <p className="text-gray-700 text-sm mb-2">
                                        Code: <span className="font-mono">{product.code}</span>
                                    </p>
                                    {/* Price */}
                                    <p className="text-green-600 text-lg font-bold">
                                        {product.price}
                                    </p>
                                </div>
                                {/* Bottom Line */}
                                <div className="h-1 w-full bg-gray-300 group-hover:bg-green-500 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>


                </div>

            </section >



            <div>
                <Endimg />
            </div>








        </div>
    );
};
