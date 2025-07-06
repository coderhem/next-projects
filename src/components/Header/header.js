'use client';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../navbar/nav';
import headerLogo from '../../assets/images/header-logo-white.png'
import headerLogoBlack from '../../assets/images/header-logo-black.png'
import { ThemeToggle } from '@/app/theme';

const Header = () => {
 // const [isOpen, setIsOpen] = useState(false);

 // useEffect(() => {
 //  const body = document.body;
 //  if (isOpen) {
 //   body.classList.add('dark-mode');
 //  } else {
 //   body.classList.remove('dark-mode');
 //  }
 // }, [isOpen]);

 // const toggleTheme = () => {
 //  setIsOpen(prev => !prev);
 // };


 // Sticky Header Code
 const [isScroll, setIsScroll] = useState(false);
 const stickyHeader = useRef(null);

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY > 5) {
    stickyHeader.current.classList.add("stickyHeader");
    setIsScroll(true);
   } else {
    stickyHeader.current.classList.remove("stickyHeader");
    setIsScroll(false);
   }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);


 return (
  <>
   <header ref={stickyHeader}>
    <div className='header transition-all duration-500 py-5 max-sm:pt-20 absolute top-2 left-0 right-0 z-10 border-b-2 border-white/10'>
     <div className="container">
      <div className="flex flex-wrap justify-between items-center">
       <div className="max-w-40">
        <a href="#home" className='white-logo'>
         <img src={headerLogo.src} width={80} height={80} alt="Header Logo Image" loading='lazy' />
        </a>
        <a href="#home" className='black-logo'>
         <img src={headerLogoBlack.src} width={80} height={80} alt="Header Logo Image" loading='lazy' />
        </a>
       </div>
       <NavBar />
       <div className="flex gap-2 items-center">
        <a href="tel:9851042367" className="btn btn-primary max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:w-full max-sm:rounded-none"
        >
         Hire Me
        </a>
        {/* <a onClick={toggleTheme} className="toggle-btn">
         <i className={`fa before:text-sm ${isOpen ? 'fa-moon-o' : 'fa-sun-o'}`}
          aria-hidden="true"
         ></i>
        </a> */}
        <ThemeToggle/>
       </div>
      </div>
     </div>
    </div>
   </header>
  </>
 );
};

export default Header;
