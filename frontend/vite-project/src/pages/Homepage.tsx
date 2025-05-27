import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import ExploreProducts from '../components/ExploreProducts'
import NewArrival from '../components/NewArrival'

const Homepage = () => {
  return (
    <div>

        <Hero/>
      <Product/>
      <Categories/>
      <BestSelling/>
      <ExploreProducts/>
      <NewArrival/>
    </div>
  )
}

export default Homepage