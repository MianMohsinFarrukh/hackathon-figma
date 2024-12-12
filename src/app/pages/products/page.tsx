import Herotopbar from '@/app/components/hero-top-bar/page'
import React from 'react'

export default function Productdetails () {
  return (
    <div>
        <div><Herotopbar
                title="Product Details"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Pages", path: "/pages" },
                    { name: "Single Blog", active: true },
                ]}
                titleStyle="text-black"
                breadcrumbStyle="text-gray-500"
            /></div>
        <div></div>
    </div>
  )
}