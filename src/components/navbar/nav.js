import React, { useState, useEffect } from 'react';

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [topOffset, setTopOffset] = useState(90); // fallback value

 useEffect(() => {
  const updateTop = () => {
   const header = document.querySelector('.header'); // make sure this class exists
   if (header) {
    setTopOffset(header.offsetHeight);
   }
  };

  updateTop(); // on load
  window.addEventListener('resize', updateTop);
  return () => window.removeEventListener('resize', updateTop);
 }, []);

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

    <div
     className={`hamburger group cursor-pointer ${isOpen ? 'active' : ''}`}
     onClick={() => setIsOpen(!isOpen)}
    >
     <span></span><span></span><span></span>
    </div>

    <div
     className={`navbarActive bg-black pt-5 transition-all duration-300 ease-in-out fixed h-full left-0 right-0 w-full shadow-md z-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
     style={{ top: `${topOffset}px` }}
    >
     <div className="container nav-wrapper">
      <ul className='flex flex-col gap-7'>
       <li><a href="#" className="nav-item">Home</a></li>
       <li><a href="#aboutMe" className="nav-item">About Me</a></li>
       <li><a href="#ourServices" className="nav-item">Services</a></li>
       <li><a href="#" className="nav-item">Contact Me</a></li>
      </ul>
     </div>
    </div>
   </nav>
  </>
 );
};

export default NavBar;
