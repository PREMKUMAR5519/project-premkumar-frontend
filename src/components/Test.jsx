import React from 'react'
import Header from './Header'
import menFit from '../images/menfit.png'
import { Link } from 'react-router-dom'
import '../styles/Test.css'
import main_page_img from '../images/main_page_img.png'
import lap_main from '../images/lap_main.png'
import ScrollAnimatedImage from './ScrollAnimatedImage'
import three_img from '../images/three_img.png'
import screenshot from '../images/screenshot.png'

function Test() { 
  return (
    <div className='mainpage_container'   >
      <div className='header_container' >
        <Header />
      </div>
      <div className='picture_container' >
        <div className='picture_container_1' style={{backgroundImage:`url(${lap_main})`}} >
          <img src={screenshot} className='screenshot' alt="" />
        </div>
        <div className='picture_container_2' >
          <div className='getstart' >
            <h1 className='main_quotes' ><span className='shape' >SHAPE</span><span className='your' >YOUR</span><div className='idealbody' >IDEAL BODY</div></h1>
            <h6 className='by_fitsible' >By Fitsible</h6>
            <Link to='/register' ><button className='button_getstart' >Get Start</button></Link>
          </div>
          <dir>
          </dir>
        </div>

        <div className='picture_container_3' >
          <div  className='picture_container_3_1' >
            <img  className='picture_container_3_img' src={main_page_img} alt="" />
            <div className='toberotate' >Fitness</div>

            <img className='picture_container_3_threeimg' src={three_img} alt="" />
            <div className='scrollimg_main_div' >

            <ScrollAnimatedImage />
            </div>
          </div>

        </div>

      </div>
      <div className='footer_container' >
        <div className='quotes2' >
          <h1 className='challenge' >Challenge yourself every day</h1><img src={menFit} className='footer_img' alt="" />
        </div>

      </div>
    </div>
  )
}

export default Test