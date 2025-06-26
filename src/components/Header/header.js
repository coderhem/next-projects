'use client';
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../navbar/nav';

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  const body = document.body;
  if (isOpen) {
   body.classList.add('dark-mode');
  } else {
   body.classList.remove('dark-mode');
  }
 }, [isOpen]);

 const toggleTheme = () => {
  setIsOpen(prev => !prev);
 };


 // Sticky Header
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
       <div className="logo">
        <h1 className="h5">LOGO</h1>
       </div>
       <NavBar />
       <div className="flex gap-2 items-center">
        <a href="#" className="btn btn-primary max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:w-full max-sm:rounded-none"
        >
         Hire Me
        </a>
        <a onClick={toggleTheme} className="toggle-btn">
         <i className={`fa before:text-sm ${isOpen ? 'fa-moon-o' : 'fa-sun-o'}`}
          aria-hidden="true"
         ></i>
        </a>
       </div>
      </div>
     </div>
    </div>
   </header>
  </>
 );
};

export default Header;
