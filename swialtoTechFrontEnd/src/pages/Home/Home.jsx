import React from 'react'
import HomeHero from './HomeHero'
import HeroSection from '../../components/HeroSection'
import ProductList from './ProductList'
import HomeService from './HomeService'
import OurCategories from './OurCategories'
// import HomeBlogs from './HomeBlogs'
import YtVideo from '../../components/YtVideo'
import PersonDetails from './PersonDetails'


const Home = () => (
  <>
    <HeroSection />
    <ProductList />
    <HomeService />
    <PersonDetails />
    <OurCategories />
    {/* <HomeBlogs /> */}
    <YtVideo />
    
    {/* <HomeHero /> */}

  </>
)

export default Home