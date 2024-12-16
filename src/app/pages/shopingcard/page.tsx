import Herotopbar from '@/app/components/hero-top-bar/page';
import React from 'react'

export default function Shopingcard() {
    return (
        <div>
            <div>
                <Herotopbar
                    title="Shopping Curt"
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Pages", path: "/pages" },
                        { name: "Shopping Curt", active: true },
                    ]}
                    titleStyle="text-purple-900 "
                    breadcrumbStyle="text-gray-500"
                />
            </div>


            <div className="flex justify-center px-4 py-8 md:px-20 lg:px-32 ">
                <div className="w-full">
                    {/* Cart Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-blue-800 text-sm md:text-lg font-semibold">
                                    <th className="py-3">Product</th>
                                    <th className="py-3">Price</th>
                                    <th className="py-3">Quantity</th>
                                    <th className="py-3">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="flex items-center py-3">
                                            <img
                                                src={`/imges/b1-${index + 1}.png`}
                                                alt="product"
                                                className="w-20 h-20 mr-3 rounded"
                                            />
                                            <div>
                                                <p className="text-sm md:text-base font-semibold">Product Name</p>
                                                <p className="text-xs md:text-sm text-gray-500">Color: Brown</p>
                                                <p className="text-xs md:text-sm text-gray-500">Size: XL</p>
                                            </div>
                                        </td>
                                        <td className="text-sm md:text-base font-semibold">$32.00</td>
                                        <td className="text-sm md:text-base">
                                            <input
                                                type="number"
                                                className="w-16 border border-gray-300 rounded px-2 py-1"
                                                defaultValue="1"
                                            />
                                        </td>
                                        <td className="text-sm md:text-base font-semibold">£219.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                        {/* Update and Clear Cart */}
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <button className="bg-pink-500 text-white px-4 py-2 rounded">
                                Update Cart
                            </button>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded">
                                Clear Cart
                            </button>
                        </div>

                        {/* Cart Totals */}
                        <div className="w-full md:w-1/3 border p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Subtotal:</span>
                                <span>£219.00</span>
                            </div>
                            <div className="flex justify-between text-gray-700 mb-2">
                                <span>Total:</span>
                                <span className="text-lg font-bold">£325.00</span>
                            </div>
                            <button className="bg-green-500 text-white w-full py-2 rounded mt-4">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>

                    {/* Shipping Section */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Calculate Shopping</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Bangladesh"
                                className="w-full border px-4 py-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Mirpur Dhaka - 1200"
                                className="w-full border px-4 py-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="w-full border px-4 py-2 rounded"
                            />
                            <button className="bg-pink-500 text-white w-full py-2 rounded">
                                Calculate Shipping
                            </button>
                        </div>
                    </div>
                </div>
            </div>

















        </div>

    );
};
