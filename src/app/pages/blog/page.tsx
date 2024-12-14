import Herotopbar from '@/app/components/hero-top-bar/page'
import React from 'react'

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
            <div></div>
        </div>
    )
}
