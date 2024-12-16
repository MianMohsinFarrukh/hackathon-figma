import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import Image from 'next/image';
import Endimg from '@/app/components/endimg/page';
export default function Ordercomplete() {
    return (
        <div>
            <div>
                <Herotopbar
                    title="Order Completed"
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Pages", path: "/pages" },
                        { name: "Order Completed", active: true },
                    ]}
                    titleStyle="text-purple-900 "
                    breadcrumbStyle="text-gray-500"
                />
            </div>

            <div className="">
                <Image className=" md:mx-40 p-16 items-center" width={800} height={800} src="/imges/ordercomplete.png" alt='image'></Image>
            </div>

            <Endimg />






















        </div>
    );
};
