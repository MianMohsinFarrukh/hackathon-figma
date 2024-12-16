"use client";
import Endimg from '@/app/components/endimg/page'
import Herotopbar from '@/app/components/hero-top-bar/page'
import React from 'react'

export default function Faq() {
    return (
        <div>
            <div>
                <Herotopbar
                    title="FAQ"
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Pages", path: "/pages" },
                        { name: "FAQ", active: true },
                    ]}
                    titleStyle="text-purple-900 "
                    breadcrumbStyle="text-gray-500"
                />
            </div>

            <div>
                <div className="flex p-10 m-6  justify-center items-center min-h-screen  px-4">
                    <div className="flex flex-col lg:flex-row   max-w-6xl w-full">
                        {/* Left Side - General Information */}
                        <div className="p-8 lg:w-1/2">
                            <h2 className="text-2xl font-bold text-purple-900 mb-6">
                                General Information
                            </h2>

                            {/* Information Items */}
                            {[
                                {
                                    title: "Eu dictumst cum at sed euismod condimentum?",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.",
                                },
                                {
                                    title: "Magna bibendum est fermentum eros.",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.",
                                },
                                {
                                    title: "Odio malesuada hac erat consectetur scelerisque?",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.",
                                },
                                {
                                    title: "Eti id blandit sobores bel velit que maro?",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique nulla vitae, consequat gravida sagittis.",
                                },
                            ].map((item, index) => (
                                <div key={index} className="mb-6">
                                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-8 bg-gray-50 lg:w-1/2">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                                Ask a Question
                            </h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject*"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Type Your Message*"
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-600 transition"
                                >
                                    Send Mail
                                </button>
                            </form>
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
