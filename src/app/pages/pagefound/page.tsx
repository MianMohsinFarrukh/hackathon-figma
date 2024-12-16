import Herotopbar from '@/app/components/hero-top-bar/HeroTopBar'
import React from 'react'
import Image from 'next/image'
import Endimg from '@/app/components/endimg/page'
export default function Faq() {
    return (
        <div>
            <div>
                <Herotopbar
                    title="404 Not Found"
                    breadcrumbs={[
                        { name: "Home", path: "/" },
                        { name: "Pages", path: "/pages" },
                        { name: "404 Not Found", active: true },
                    ]}
                    titleStyle="text-purple-900 "
                    breadcrumbStyle="text-gray-500"
                />
            </div>
            <div className='item center mt-4  px-16'>
                <Image className=" mt-4 mb-14 w-full px-16" width={200} height={200} src="/imges/notfound.png" alt='image'></Image>
            </div>

            <Endimg />



        </div>

    )
}
