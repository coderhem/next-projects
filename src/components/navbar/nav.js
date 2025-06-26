'use client';
import React, { useState } from 'react'

const NavBar = () => {

 const [isOpen, setIsOpen] = useState(false);
 return (
  <>
   <nav className='nav-wrapper'>
    <div className="navbar">
     <ul className='flex justify-between gap-10'>
      <li><a href="#" className='nav-item'>Home</a></li>
      <li><a href="#aboutMe" className='nav-item'>About Me</a></li>
      <li><a href="#ourServices" className='nav-item'>Services</a></li>
      <li><a href="#" className='nav-item'>Contact Me</a></li>
     </ul>
    </div>

    {/* Hamburger Icon */}
    <div className={`hamburger group cursor-pointer ${isOpen ? 'active' : ''}`}
     onClick={() => setIsOpen(!isOpen)}
    >
     <span></span>
     <span></span>
     <span></span>
    </div>

    {/* Nav Menu */}
    <div className={`navbarActive bg-black pt-5 transition-all duration-300 ease-in-out fixed h-full top-[135px] sm:top-[90px]left-0 right-0 w-full  shadow-md z-10 ${isOpen ? 'translate-x-0 top-[135px] sm:top-[90px]' : '-translate-x-full'
     }`}>
     <div className="container nav-wrapper">
      <ul className='flex flex-col gap-7'>
       <li><a href="#" className="nav-item">Home</a></li>
       <li><a href="#aboutMe" className="nav-item">About Me</a></li>
       <li><a href="#ourServices" className="nav-item">Services</a></li>
       <li><a href="#" className="nav-item">Contact Me</a></li>
      </ul>
     </div>
    </div>
   </nav >
  </>
 )
}

export default NavBar;
