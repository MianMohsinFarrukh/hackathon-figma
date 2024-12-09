import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className=" bg-purple-50 text-gray-800 py-">
            <div className="container mx-auto px-4 pt-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Hekto</h2>
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 mb-4">
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="flex-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-md w-full md:w-auto">
                                Sign Up
                            </button>
                        </div>
                        <p className="text-sm">
                            Contact Info <br />
                            17 Princess Road, London, Greater London NW1 8JR, UK
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                            <li>Smart Phones & Tablets</li>
                            <li>Video Games & Consoles</li>
                            <li>Waterproof Headphones</li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
                        <ul className="space-y-2">
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Pages</h3>
                        <ul className="space-y-2">
                            <li>Blog</li>
                            <li>Browse the Shop</li>
                            <li>Category</li>
                            <li>Pre-Built Pages</li>
                            <li>WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className="mt-10  bg-purple-100 pt-4 flex flex-col md:flex-row px-24 pb-4  justify-between items-center">
                <p className="text-sm text-gray-600">©Webecy - All Rights Reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <div className="bg-blue-800 text-white p-2 rounded-full cursor-pointer hover:bg-purple-600">
                        <FaFacebookF />
                    </div>

                    <div className="bg-blue-800 text-white p-2 rounded-full cursor-pointer hover:bg-purple-600">
                        <FaInstagram />


                    </div>
                    <div className="bg-blue-800 text-white p-2 rounded-full cursor-pointer hover:bg-purple-600">
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
