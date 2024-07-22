import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'


import HeroSection from '../Components/HeroSection'
import { Card } from 'react-bootstrap'


export default function LandingPage() {
  return (
    <Fragment>
        <Navbar/>

       <HeroSection/>
       <Card/>
    </Fragment>
  )
}
