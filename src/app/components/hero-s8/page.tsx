import React from "react";
import Image from "next/image";
const TopCategories: React.FC = () => {
    const categories = [
        {
            id: 1,
            name: "Mini LCW Chair",
            price: "$56.00",
            image: "/imges/img1.png", 
        },
        {
            id: 2,
            name: "Mini LCW Chair",
            price: "$56.00",
            image: "/imges/img2.png",
        },
        {
            id: 3,
            name: "Mini LCW Chair",
            price: "$56.00",
            image: "/imges/imgpanch.png",
        },
        {
            id: 4,
            name: "Mini LCW Chair",
            price: "$56.00",
            image: "/imges/imgchr.png",
        },
    ];

    return (
        <section className="py-12 ">
            <div className="container mx-auto text-center">
                <h1 className="text-center text-xl sm:text-xl md:text-2xl mt-4 font-bold text-purple-900 mb-10">
                    Top Categories
                </h1>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center bg-gray-300 rounded-full shadow-lg p-4 transition-transform hover:scale-105 hover:shadow-[5px_5px_20px_-5px_rgba(128,0,128,0.5)]"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-24 h-24 md:w-28 md:h-28 object-contain"
                            />
                            <h3 className="text-sm md:text-md font-semibold mt-4">
                                {category.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{category.price}</p>
                            {/* View Shop Button */}
                            <button className="absolute bottom-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 opacity-0 hover:opacity-100 transition-opacity">
                                View Shop
                            </button>
                        </div>
                    ))}
                </div>

                {/* Dots for Navigation (Optional) */}
                <div className="flex justify-center mt-6 space-x-2">
                    <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                </div>
            </div>

<div>
<Image className="w-full mt-36 mb-4" width={200} height={200} src="/imges/last.png" alt='image'></Image>
</div>


<div className="">
<Image className=" mt-10 mb-2 w-full px-24" width={200} height={400} src="/imges/ema.png" alt='image'></Image>
</div>

        </section>
    );
};

export default TopCategories;
