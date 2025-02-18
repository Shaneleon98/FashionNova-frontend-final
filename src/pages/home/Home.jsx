import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import ProductCards from '../shop/ProductCards'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../Blogs/Blogs'
const Home = () => {
  return (
   <>
   <Banner/>
   <Categories/>
   <HeroSection/>
   <TrendingProducts/>
   <DealsSection/>
   <PromoBanner/>
   <Blogs/>
   </>
  )
}

export default Home