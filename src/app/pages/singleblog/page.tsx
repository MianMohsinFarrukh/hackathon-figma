import Endimg from '@/app/components/endimg/page'
import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import { BiSolidPen } from 'react-icons/bi'
import { FaEnvelope, FaFacebookF, FaTwitter, FaUser } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong, FaSquareInstagram } from 'react-icons/fa6'
import { RiCalendarTodoFill } from 'react-icons/ri'
import Image from 'next/image'
export default function Singleblog() {
    return (
        <div>
            <div><Herotopbar
                title="Single Blog"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Pages", path: "/pages" },
                    { name: "Single Blog", active: true },
                ]}
                titleStyle="text-purple-900 "
                breadcrumbStyle="text-gray-500"
            />
            </div>

            <div className="max-w-7xl mx-auto  px-16 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Blog Section (Left Side) */}
                    <div className="lg:col-span-3 mt-8 space-y-10">
                        {/* Blog Post 1 */}
                        <div className="overflow-hidden">
                            <img
                                src="/imges/b1.png"
                                alt="Blog Post 1"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">

                                <div className='flex p-2'>
                                    <div className='flex gap-1'><BiSolidPen className='mt-1' /><span className="bg-pink-200 text-black px-4 text-sm">Surf Auxion</span></div>
                                    <div className='flex gap-1 ml-8'><RiCalendarTodoFill className='mt-1' /><span className="bg-orange-200 text-black px-4 text-sm">Aug 09 2020</span></div>
                                </div>
                                <h2 className="text-2xl font-bold mb-2">
                                    Mauris at orci non vulputate diam tincidunt nec.
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.
                                </p>

                                <p className="text-gray-600 mt-2 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.
                                </p>

                                <div className='h-20 w-full bg-gray-200 flex  '>
                                    <div className='bg-pink-400 w-2 h-20 flex'></div>
                                    <p className='text-sm p-4 space-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias beatae quia et, veritatis commodi assumenda soluta. Fugit dolorem excepturi velit, dolores ullam nihil amet molestiae delectus at possimus consectetur?
                                    </p>

                                </div>

                                <div className='flex'>
                                    <Image className=" mt-4  " width={1400} height={1200} src="/imges/y1.png" alt='image'></Image>
                                    <Image className=" mt-4  pl-2 " width={1400} height={1200} src="/imges/y2.png" alt='image'></Image>
                                </div>

                                <p className="text-gray-600 mt-4 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.
                                </p>

                                <div className="grid grid-cols-2 mt-6 md:grid-cols-4 gap-6">
                                    {[
                                        {
                                            name: "Men's Fashion Wear",
                                            price: "$150.00",
                                            img: "/imges/pr1.png",
                                        },
                                        {
                                            name: "Women's Fashion",
                                            price: "$120.00",
                                            img: "/imges/pr2.png",
                                        },
                                        {
                                            name: "White Dummy Fashion",
                                            price: "$99.00",
                                            img: "/imges/pr3.png",
                                        },
                                        {
                                            name: "The Red Digital Clock",
                                            price: "$80.00",
                                            img: "/imges/pr4.png",
                                        },
                                    ].map((product, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-4 rounded-lg shadow-md text-center"
                                        >
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-48 object-cover mb-4 rounded-lg"
                                            />
                                            <h4 className="text-gray-800 font-bold">{product.name}</h4>
                                            <p className="text-pink-500 font-semibold">{product.price}</p>
                                        </div>
                                    ))}

                                </div>

                                <p className="text-gray-600 mt-8 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.
                                </p>

                                <p className="text-gray-600 mt-4 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.Lorem ipsum dolo, consectetur adipiscing elit. Nunc
                                    facilisis diam vel odio tristique ornare.
                                </p>

                                <div className="flex space-x-4 mt-8 md:ml-80">
                                    <a
                                        href="#"
                                        className=" bg-purple-500 rounded-full p-1 text-white text-2xl hover:text-pink-600 transition"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a
                                        href="#"
                                        className=" bg-pink-500 rounded-full p-1 text-white text-2xl hover:text-pink-600 transition"
                                    >
                                        <FaSquareInstagram />
                                    </a>
                                    <a
                                        href="#"
                                        className=" bg-cyan-500 rounded-full p-1 text-white text-2xl hover:text-pink-600 transition"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>

                                <div className='bg-gray-200 w-full h-8 mt-4 flex justify-between' >
                                    <span className='p-1 flex'><FaArrowLeftLong className='mt-1 mx-1' />Previous Post</span><span className='p-1 flex' >Next Post<FaArrowRightLong className='mt-1 mx-1' /></span>
                                </div>

                                <div className='mt-8' >
                                    <Image className=" mt-4  " width={1400} height={1200} src="/imges/p99.png" alt='image'></Image>
                                </div>


                                <div className="max-w-4xl mx-auto p-6">


                                    <form className="space-y-6 mt-8">
                                        {/* Name and Email Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                                    Your Name*
                                                </label>
                                                <div className="relative">
                                                    <FaUser className="absolute top-3 left-3 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="Your Name"
                                                        className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="email"
                                                    className="text-sm font-medium text-gray-700"
                                                >
                                                    Write Your Email*
                                                </label>
                                                <div className="relative">
                                                    <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        placeholder="Your Email"
                                                        className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Comment Box */}
                                        <div>
                                            <label
                                                htmlFor="comment"
                                                className="text-sm font-medium text-gray-700"
                                            >
                                                Write Your Comment*
                                            </label>
                                            <textarea
                                                id="comment"
                                                placeholder="Write your comment here"
                                                className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                                                rows={6}
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Save Info Checkbox */}
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="saveInfo"
                                                className="h-4 w-4 text-pink-500 border-gray-300 rounded"
                                            />
                                            <label
                                                htmlFor="saveInfo"
                                                className="ml-2 text-sm text-gray-600 cursor-pointer"
                                            >
                                                Save my name, email, and website in this browser for the next time I
                                                comment.
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition duration-300"
                                        >
                                            Continue Shipping
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>








                    {/* Sidebar Section (Right Side) */}
                    <div className="lg:col-span-1 space-y-1 mb-8">
                        {/* Search */}
                        <div className="p-6">
                            <h3 className="text-lg text-purple-900 font-semibold mb-4">Search</h3>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 border rounded-md focus:ring focus:ring-pink-300"
                            />
                        </div>

                        {/* Categories */}
                        <div className="p-1">
                            <h3 className="text-lg text-purple-900 font-semibold mb-2">Categories</h3>
                            <div className='flex'>
                                <div>
                                    <ul className=' p-1 gap-1'>
                                        <li className=' hover:bg-pink-500 rounded-sm p-1'>Hobies (14)</li>
                                        <li className=' hover:bg-pink-500 rounded-sm p-1'>Hobies (21)</li>
                                        <li className=' hover:bg-pink-500 rounded-sm p-1'>Hobies (21)</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='ml-1 p-1'>
                                        <li className=' hover:bg-pink-500 rounded-sm p-1'>Women (21)</li>
                                        <li className=' hover:bg-pink-500 rounded-sm p-1'>Women (21)</li>
                                        <li className=' hover:bg-pink-500 rounded-sm p-1'>Women (21)</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="p-2">
                            <h3 className="text-lg text-purple-900 font-semibold mb-4">Recent Posts</h3>
                            <img
                                src="/imges/respost.png"
                                alt="Sale Product"
                                className="w-auto h-auto object-cover rounded-md mb-4"
                            />

                        </div>

                        {/* Sale Product */}
                        <div className="p-2">
                            <h3 className="text-lg text-purple-900 font-semibold mb-4">Sale Product</h3>
                            <img
                                src="/imges/salepd.png"
                                alt="Sale Product"
                                className="w-auto h-auto object-cover rounded-md mb-4"
                            />

                        </div>

                        {/* Offer Product */}
                        <div className="p-2">
                            <h3 className="text-lg text-purple-900 font-semibold mb-4">Offer Product</h3>
                            <img
                                src="/imges/offpic.png"
                                alt="Offer Product"
                                className="w-auto h-auto object-cover rounded-md mb-4"
                            />

                        </div>

                        {/* Follow */}
                        <div className="p-2">
                            <h3 className="text-lg text-purple-900 font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className=" bg-purple-500 rounded-full p-1 text-white text-2xl hover:text-pink-600 transition"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className=" bg-pink-500 rounded-full p-1 text-white text-2xl hover:text-pink-600 transition"
                                >
                                    <FaSquareInstagram />
                                </a>
                                <a
                                    href="#"
                                    className=" bg-cyan-500 rounded-full p-1 text-white text-2xl hover:text-pink-600 transition"
                                >
                                    <FaTwitter />
                                </a>
                            </div>
                            <div>
                                <h3 className='text-purple-900 font-bold mt-2'>Tags</h3>
                                <div className=''>
                                    <span className='text-purple-900   hover:text-pink-500 underline'>General</span>
                                    <span className='text-purple-900 ml-4  hover:text-pink-500 underline'>Atsanil</span>
                                    <span className='text-purple-900  ml-4  hover:text-pink-500 underline'>Insas</span>
                                </div>
                                <div>
                                    <span className='text-purple-900   hover:text-pink-500 underline'>Bibsaas</span>
                                    <span className='text-purple-900 ml-4  hover:text-pink-500 underline'>Nulla</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Endimg />
            </div>
        </div>
    )
}
