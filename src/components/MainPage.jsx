import React from 'react'
import Test from './Test'
import About from './About'
import ContactUs from './ContactUs'
import { Element } from 'react-scroll';

function MainPage() {
  return (
    <div>
        <Element name="home"><Test/></Element>
        <Element name="about"><About/></Element>
        <Element name="contact"><ContactUs/></Element>
    </div>
  )
}

export default MainPage