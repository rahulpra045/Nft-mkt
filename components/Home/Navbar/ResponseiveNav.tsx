"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponseiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
      <>
      <Nav openNav={showNavHandler} />
        <MobileNav nav={showNav} closeNav={closeNavHandler } />
      </>
  )
}

export default ResponseiveNav