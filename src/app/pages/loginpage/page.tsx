import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import Endimg from '@/app/components/endimg/page'
export default function loginpage() {
    return (
        <div>
            <Herotopbar
                title="My Account"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Pages", path: "/pages" },
                    { name: "My Account", active: true },
                ]}
                titleStyle='text-purple-900 '
            />


            <div className="flex items-center pt-4 pb-4 justify-center h-screen ">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    <p className="text-gray-500 text-center mb-6">
                        Please login using account detail below.
                    </p>

                    {/* Form */}
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                            />
                        </div>

                        <div className="text-left mb-6">
                            <a href="#" className="text-gray-500 text-sm hover:underline">
                                Forgot your password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-sm mt-6">
                        Don't have an Account?{" "}
                        <a href="#" className="text-pink-500 hover:underline">
                            Create account
                        </a>
                    </p>
                </div>
            </div>

            <Endimg />


        </div>

    )
}
