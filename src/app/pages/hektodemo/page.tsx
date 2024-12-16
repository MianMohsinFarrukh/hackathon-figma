"use client";
import Herotopbar from "@/app/components/hero-top-bar/page";
import React from "react";

const Checkout: React.FC = () => {
    const cartItems = [
        { name: "UI diam consequat", price: 32.0, image: "/imges/s1.png" },
        { name: "UI diam consequat", price: 32.0, image: "/imges/s2.png" },
        { name: "UI diam consequat", price: 32.0, image: "/imges/s3.png" },
        { name: "UI diam consequat", price: 32.0, image: "/imges/s4.png" },
        { name: "UI diam consequat", price: 32.0, image: "/imges/s5.png" },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const total = subtotal + 10; // Example shipping/tax cost

    return (
        <div>
            <div><Herotopbar
                title="Hekto Demo"
                breadcrumbs={[
                    // { name: "Home", path: "/" },
                    // { name: "Pages", path: "/pages" },
                    // { name: "Blog", active: true },
                ]}
                titleStyle="text-purple-900 "
                breadcrumbStyle="text-gray-500"
            />
            </div>

            <div className="ml-12 pt-10">
                <h3 className="text-purple-800 font-bold text-xl">Hekto Demo</h3>
                <p className="text-purple-800">Cart/ Information/ Shipping/ Payment</p>
            </div>


            <div className="min-h-screen  p-4 md:p-10">
                {/* Container */}
                <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Checkout Form */}
                    <div className="p-6 mt-4 bg-slate-100">
                        <h2 className="text-2xl pt-4 font-bold mb-6">Contact Information</h2>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email or mobile phone number"
                                className="w-full border border-gray-300 rounded p-2"
                            />

                            <div className="flex pb-8 items-center space-x-2">
                                <input type="checkbox" id="subscribe" />
                                <label htmlFor="subscribe" className="text-sm">
                                    Keep me up to date on news and exclusive offers
                                </label>
                            </div>

                            <h2 className="text-2xl pt-8 font-bold mt-6 mb-4">Shipping Address</h2>

                            <div className="grid pt-4 grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First name (optional)"
                                    className="border border-gray-300 rounded p-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="border  border-gray-300 rounded p-4"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full border border-gray-300 rounded p-4"
                            />
                            <input
                                type="text"
                                placeholder="Apartment, suit, etc. (optional)"
                                className="w-full border border-gray-300 rounded p-4"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="border border-gray-300 rounded p-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    className="border border-gray-300 rounded p-2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full  bg-pink-500 text-white py-4  rounded hover:bg-pink-600"
                            >
                                Continue Shipping
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Cart Summary */}
                    <div className="p-6 mt-4">
                        {/* <h2 className="text-2xl font-bold mb-6">Cart Summary</h2> */}
                        <div className="space-y-10">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded"
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">Color: Brown | Size: XL</p>
                                    </div>
                                    <p className="font-semibold">£{item.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>


                        <div className="bg-slate-200 w-full h-1 mt-6"></div>

                        <div className="mt-12 rounded-md p-6 bg-gray-200 pt-4">
                            <p className="flex justify-between text-lg font-semibold">
                                <span>Subtotal:</span> <span>£{subtotal.toFixed(2)}</span>
                            </p>
                            <p className="flex justify-between text-lg font-semibold">
                                <span>Totals:</span> <span>£{total.toFixed(2)}</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Shipping & taxes calculated at checkout
                            </p>
                            <button
                                className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
                                type="button"
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
