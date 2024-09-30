import React from 'react'
import Hero from './Hero/Hero'
import HotBids from './HotBids/HotBids'
import TopCollection from './TopCollection/TopCollection'
import Category from './Category/Category'

const Home = () => {
  return (
    <div>
      <Hero />
      <HotBids/>
      <TopCollection/>
      <Category/>
    </div>
  )
}

export default Home