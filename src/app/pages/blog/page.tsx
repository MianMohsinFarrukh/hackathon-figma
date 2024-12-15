import Endimg from '@/app/components/endimg/page'
import Herotopbar from '@/app/components/hero-top-bar/page'
import React from 'react'
import { BiSolidPen } from 'react-icons/bi'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { RiCalendarTodoFill } from 'react-icons/ri'

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
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                                    facilisis diam vel odio tristique ornare.
                                </p>
                                <a href="#" className="text-pink-500 hover:underline">
                                    Read More →
                                </a>
                            </div>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/imges/b2.png"
                                alt="Blog Post 2"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">
                                    Aenean vitae in aliquam ultricies lectus. Etiam.
                                </h2>
                                <div className='flex p-2'>
                                    <div className='flex gap-1'><BiSolidPen className='mt-1' /><span className="bg-pink-200 text-black px-4 text-sm">Surf Auxion</span></div>
                                    <div className='flex gap-1 ml-8'><RiCalendarTodoFill className='mt-1' /><span className="bg-orange-200 text-black px-4 text-sm">Aug 09 2020</span></div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Nulla vitae facilisis nisi. Curabitur vitae dui sed sem aliquam
                                    sollicitudin.
                                </p>
                                <a href="#" className="text-pink-500 hover:underline">
                                    Read More →
                                </a>
                            </div>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/imges/b3.png"
                                alt="Blog Post 3"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">
                                    Sit nam congue feugiat nisl, mauris amet nisi.
                                </h2>
                                <div className='flex p-2'>
                                    <div className='flex gap-1'><BiSolidPen className='mt-1' /><span className="bg-pink-200 text-black px-4 text-sm">Surf Auxion</span></div>
                                    <div className='flex gap-1 ml-8'><RiCalendarTodoFill className='mt-1' /><span className="bg-orange-200 text-black px-4 text-sm">Aug 09 2020</span></div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Quisque eget bibendum massa, eget auctor sapien. Etiam aliquam
                                    enim eget eros convallis bibendum.
                                </p>
                                <a href="#" className="text-pink-500 hover:underline">
                                    Read More →
                                </a>
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
                            {/* <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-pink-500">
                                        Beautiful Places to Visit
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500">
                                        Fashion Trends 2024
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-pink-500">
                                        Tips for a Healthier Lifestyle
                                    </a>
                                </li>
                            </ul> */}
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




            <div className="max-w-7xl mx-auto mb-10 px-20 lg:p-8 flex md:ml-80" >
                <div className='h-6 w-6 bg-pink-400   outline outline-2 outline-offset-1 ...'><span className='text-white p-2'>1</span></div>
                <div className='h-6 w-6  ml-6 outline outline-2 outline-offset-1 ...'><span className='text-gray-500 p-2'>2</span></div>
                <div className='h-6 w-6 bg-white ml-6 outline outline-2 outline-offset-1 ...'><span className='text-gray-500 p-2'>3</span></div>
                <div className='h-6 w-6 bg-white ml-6 outline outline-2 outline-offset-1 ...'><span className='text-gray-500 p-2'>4</span></div>

            </div>


            <div>
                <Endimg />
            </div>






        </div>
    )
}
