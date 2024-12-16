"use client";
import Endimg from '@/app/components/endimg/page';
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar';
import Pageheadersec from '@/app/components/pageheadersec/page';
import React from 'react';

export default function Shopleftside() {
    return (
        <div>
            {/* Hero Top Bar */}
            <div>
                <Herotopbar
                    title="Shop Left Sidebar"
                    breadcrumbs={[
                        { name: 'Home', path: '/' },
                        { name: 'Pages', path: '/pages' },
                        { name: 'Shop Left Sidebar', active: true },
                    ]}
                    titleStyle="text-purple-900"
                    breadcrumbStyle="text-gray-500"
                />
            </div>

            {/* Page Header */}
            <div className="mt-4">
                <Pageheadersec />
            </div>

            {/* Page Content */}
            <div className="flex flex-col md:flex-row px-14 min-h-screen">
                {/* Left Sidebar */}
                <aside className="w-full md:w-1/4 bg-white p-6 border-r border-gray-200">
                    <div className="space-y-6">
                        {/* Product Brand */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Product Brand</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>Counter Furniture</li>
                                <li>Fusion Dot High Fashion</li>
                                <li>Unique Furniture Restor</li>
                                <li>Dream Furniture Flipping</li>
                                <li>Young Repurposed</li>
                                <li>Green Furniture</li>
                            </ul>
                        </div>

                        {/* Discount Offer */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Discount Offer</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>20% Cashback</li>
                                <li>25% Cashback Offer</li>
                                <li>30% Discount Offer</li>
                            </ul>
                        </div>

                        {/* Rating */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Rating Item</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>⭐⭐⭐⭐⭐ (5)</li>
                                <li>⭐⭐⭐⭐ (4)</li>
                                <li>⭐⭐⭐ (3)</li>
                                <li>⭐⭐ (2)</li>
                                <li>⭐ (1)</li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Categories</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>Prestashop</li>
                                <li>Magento</li>
                                <li>Bigcommerce</li>
                                <li>3dcart</li>
                                <li>Bags</li>
                                <li>Accessories</li>
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Price Filter</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>$0.00 - $150.00</li>
                                <li>$150.00 - $300.00</li>
                                <li>$300.00 - $450.00</li>
                                <li>$450.00 - $504.00</li>
                            </ul>
                        </div>

                        {/* Filter by Color */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Filter By Color</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>Brown</li>
                                <li>Green</li>
                                <li>Purple</li>
                                <li>Sky</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Right Content */}
                <main className="w-full md:w-3/4 p-6">
                    <div className="space-y-6">
                        {/* Product Card */}
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row bg-white rounded-lg border shadow p-4 w-full"
                            >
                                <div className="w-full md:w-1/3">
                                    <img
                                        src={`/imges/b1.png`}
                                        alt={`Product ${index + 1}`}
                                        className="w-full rounded"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Product Title {index + 1}
                                    </h4>
                                    <p className="text-sm text-gray-600 my-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm">
                                        <span className="text-pink-500 font-bold">$200.00</span>
                                        <span className="line-through text-gray-400">$250.00</span>
                                    </div>
                                    <div className="mt-2">
                                        ⭐⭐⭐⭐ <span className="text-sm text-gray-600">(4 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            
                        <div>
                            <Endimg />
                        </div>
        </div>
    );
}
