import Blog from '@/components/Blog'
import DiscountItem from '@/components/DiscountItems'
import FeaturedProducts from '@/components/Featured'
import Hero from '@/components/Hero'
import LatestProducts from '@/components/Latestproduct'
import OneMore from '@/components/Onemore'
import TrendingProducts from '@/components/Trendingproducts'
import React from 'react'


export default function page() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <TrendingProducts />
<OneMore />
      <DiscountItem />
      <Blog />
    </div>
  )
}

