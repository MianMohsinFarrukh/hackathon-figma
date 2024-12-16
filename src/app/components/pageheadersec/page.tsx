import React from 'react'

export default function Pageheadersec() {
    return (
        <div>  {/* Page Header Section */}
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
        </div>
    )
}
