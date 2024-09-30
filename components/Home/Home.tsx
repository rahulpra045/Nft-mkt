import React from 'react'
import Hero from './Hero/Hero'
import HotBids from './HotBids/HotBids'
import TopCollection from './TopCollection/TopCollection'

const Home = () => {
  return (
    <div>
      <Hero />
      <HotBids/>
      <TopCollection/>
    </div>
  )
}

export default Home