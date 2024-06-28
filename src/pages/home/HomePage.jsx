import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import MyContext from '../../context/MyContext'
import Loader from '../../components/loader/Loader'
import Highlights from '../../components/track/Highlights'
import FeaturedBrand from '../../components/track/FeaturedBrand'
import Avatar from '../../components/Avatar/Avatar'

function HomePage() {
  const context=useContext(MyContext)
  return (
    <Layout>
      <div className=' invisible'> <Avatar /></div>
      <HeroSection />
      <Category />
      <Highlights></Highlights>
      <HomePageProductCard />
      <FeaturedBrand/>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default HomePage