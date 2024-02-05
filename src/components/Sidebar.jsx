// Sidebar.js
import React, { useState } from 'react';
import { FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import '../styles/SideBar.css';
import {useUserContext} from './UserContext'
import { useNavigate } from 'react-router-dom'

const SideBar = (props) => {
  const [isHovered, setHovered] = useState(false);
  const {logout}= useUserContext()
  const navigateTo = useNavigate()
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

 const handleLogOut=()=>{
     logout();
     navigateTo('/')
 }
 const handleClick=()=>{
  props.setSetting(!props.setting)
 }
  return (
    <div
      className={`sidebar ${isHovered ? 'sidebar-expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="icon-container">
        <span> <FaHome className="icon" /> </span><span className='icon_font' >{isHovered?"Home":''}</span>
      </div>
      <div className="icon-container">
      <span> <FaCog onClick={handleClick}  className="icon" /> </span><span  onClick={handleClick}  className='icon_font' > {isHovered?"Settings":''}</span>
      </div>
      <div className="icon-container">
      <span> <FaSignOutAlt onClick={handleLogOut} className="icon" /> </span><span onClick={handleLogOut} className='icon_font' > {isHovered?"Logout":''}</span>
      </div>
    </div>
  );
};

export default SideBar;
