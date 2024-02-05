import React from 'react'
import MyButton from './Button'
import fitsible from '../images/fitsible.png'
import { useNavigate,Link as Linkk } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css'
function Header() {
  const navigateTo = useNavigate()
  return (
    <div className='header' >
        <div className='logo_field' >
          <img className='logo' src={fitsible} alt="" /><h4 className='logoname' >Fitsible</h4>
        </div>
        <div className='buttons_ui' >
        <Link to="home" smooth={true} duration={100}><h5>HOME</h5></Link>
        <Link to="about" smooth={true} duration={100}><h5>ABOUT</h5></Link>
        <Link to="contact" smooth={true} duration={100}><h5>CONTACTUS</h5></Link>
          <Linkk to='/register'><MyButton class={"register_button"} signin={"REGISTER"}  varient={"contained"} color={"primary"} /></Linkk>
          <Linkk to='/login'><MyButton class={"signin_button"} signin={"SIGN IN"} varient={"contained"} color={"success"}/></Linkk>
        </div>
    </div>
  )
}

export default Header