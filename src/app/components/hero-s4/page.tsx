import React from 'react';
import Image from 'next/image';

export default function Sectionfour() {
    return (
        <section className="min-h-screen p-6 flex flex-col items-center ">
            <h1 className="text-center text-xl sm:text-xl md:text-xl mt-10 font-bold text-purple-900 mb-10">
                What Shopex Offer!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {/* Card 1 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-[200px] hover:shadow-xl transition-shadow duration-300">
                    <Image
                        width={60}
                        height={60}
                        src="/imges/truck.png"
                        alt="Truck image"
                        className="mb-4 mt-2"
                    />
                    <h3 className="text-base font-semibold mb-2 text-center">Free Delivery</h3>
                    <p className="text-center text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-[200px] hover:shadow-xl transition-shadow duration-300">
                    <Image
                        width={60}
                        height={60}
                        src="/imges/cashback.png"
                        alt="Cashback image"
                        className="mb-4 mt-2"
                    />
                    <h3 className="text-base font-semibold mb-2 text-center">Cashback</h3>
                    <p className="text-center text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-[200px] hover:shadow-xl transition-shadow duration-300">
                    <Image
                        width={60}
                        height={60}
                        src="/imges/medal.png"
                        alt="Medal image"
                        className="mb-4 mt-2"
                    />
                    <h3 className="text-base font-semibold mb-2 text-center">Quality Assurance</h3>
                    <p className="text-center text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-[200px] hover:shadow-xl transition-shadow duration-300">
                    <Image
                        width={60}
                        height={60}
                        src="/imges/twentyfour.png"
                        alt="24/7 Support"
                        className="mb-4 mt-2"
                    />
                    <h3 className="text-base font-semibold mb-2 text-center">24/7 Support</h3>
                    <p className="text-center text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>
            </div>
        </section>
    );
}
