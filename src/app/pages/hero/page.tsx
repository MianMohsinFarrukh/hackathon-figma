
import DiscountSection from '@/app/components/hero-s7/page'
import HeroSlider from '@/app/components/hero-s1/page'
import Sectiontwo from '@/app/components/hero-s2/page'
import Sectionthree from '@/app/components/hero-s3/page'
import Sectionfour from '@/app/components/hero-s4/page'
import Sectionfive from '@/app/components/hero-s5/page'
import TrendingProducts from '@/app/components/hero-s6/page'
import React from 'react'
import TopCategories from '@/app/components/hero-s8/page'
import LatestBlog from '@/app/components/hero-s9/page'

export default function Heros() {
  return (
    <div >
      <HeroSlider />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <TrendingProducts />
      <DiscountSection />
      <TopCategories />
      <LatestBlog />
    </div>
  )
}
