'use client';
import React, { useEffect, useRef, useState } from 'react';
import headerLogo from '../../assets/images/header-logo.webp';
import { json } from 'zod';
import Link from 'next/link';

const Header = () => {
 const [handleScroll, sethandleScroll] = useState(false);
 const elementRef = useRef(null);
 const topValue = useRef(null);
 const [headerHeight, setHeaderHeight] = useState(0);
 const [isTopValue, setIsTopValue] = useState(0);

 useEffect(() => {
  const onScroll = () => {
   if (window.scrollY > 3) {
    document.body.classList.add('scrolled');
    sethandleScroll(true);
   } else {
    document.body.classList.remove('scrolled');
    sethandleScroll(false);
   }
  };

  window.addEventListener('scroll', onScroll);
  return () => {
   window.removeEventListener('scroll', onScroll);
  };
 }, []);
 // Header 

 useEffect(() => {
  if (elementRef.current) {
   const height = elementRef.current.offsetHeight;
   setHeaderHeight(height);
  }
  if (topValue.current) {
   const height = topValue.current.offsetHeight;
   setIsTopValue(height);
  }
 }, []);

 const [doctors, setDoctors] = useState([]);

 useEffect(() => {
  const storedData = localStorage.getItem('doctorName');
  const parsedData = storedData ? JSON.parse(storedData) : [];
  setDoctors(parsedData);
 }, []);

 return (
  <>
   <header className='' style={{ marginBottom: `${headerHeight}px` }}>
    <div className="bg-green text-secondary font-extrabold py-3 text-sm md:text-base" ref={topValue}>
     <div className="container">
      <div className="flex flex-wrap gap-y-1 gap-2 justify-center lg:justify-between items-center">
       <span className='text-center lg:text-start'>Get 20% off on your first consultation! Book Now.</span>
       <div className="flex justify-center flex-wrap gap-y-1 gap-5">
        <div className="relative flex items-center gap-2 group">
         <i className="fa fa-phone-square group-hover:text-secondary/80 focus:text-secondary/80 transition-all" aria-hidden="true"></i>
         <a href="tel:0123456789" className='stretched-link !text-secondary group-hover:!text-secondary/80 group-hover:!underline focus:text-secondary'>Office: 0123456789</a>
        </div>
        <div className="relative flex items-center gap-2 group">
         <i className="fa fa-ambulance group-hover:text-secondary/80 focus:text-secondary/80 transition-all" aria-hidden="true"></i>
         <a href="tel:0123456789" className='stretched-link !text-secondary group-hover:!text-secondary/80 group-hover:!underline focus:text-secondary'>Emergency Line: 0123456789</a>
        </div>
       </div>
      </div>
     </div>
    </div>
    {/* Top Header */}

    <div className="fixed z-10 left-0 right-0 transition-all duration-300"
     style={{ top: handleScroll ? 0 : `${isTopValue}px` }} ref={elementRef}>
     <div className="bg-primary pb-10 pt-28 xl:py-10 relative">
      <div className="container">
       <div className="flex flex-wrap justify-center max-lg:gap-y-5 md:justify-between items-center -mx-2">
        <div className="max-w-[178px] px-2">
         <Link href="/">
          <img src={headerLogo.src} width={178} height={52} alt="Header Logo" loading='lazy' />
         </Link>
        </div>
        <div className="absolute top-5 left-5 right-5 max-xl:left-1/2 max-xl:-translate-x-1/2 xl:static w-11/12 xl:w-5/12 bg-white rounded-md p-2 flex justify-between items-center shadow-[4px_4px_10.5px_0px_rgba(0,0,0,0.1)]">
         <div className="w-[10%]">
          <span className='bg-primary size-10 inline-flex justify-center items-center text-white rounded'>
           <i className="fa fa-search flex-1 text-center" aria-hidden="true"></i>
          </span>
         </div>
         <form action="#" className='w-[90%] flex items-center justify-between'>
          <div className="px-3 [&_input]:focus-within:outline-0 w-full lg:w-[80%]">
           <input type="text" name="search-bar" id="searchBar" className='w-full' placeholder="Find what you're looking for..." />
          </div>
          {/* <div className='[&_select]:focus-visible:outline-0 [&_select_option]:px-5 [&_select_option]:block [&_select_option]:my-1 [&_select_option]:bg-sky-300/20 [&_select_option]:min-w-2xs [&_select_option]:cursor-pointer'>
           <select name="" id="">
            <option value="">Categories</option>
            <option value="">Categories 1</option>
            <option value="">Categories 1</option>
            <option value="">Categories 2</option>
           </select>
          </div> */}
         </form>
        </div>
        <div className="3/12 px-2">
         <div className="flex flex-wrap max-lg:justify-center items-center gap-5">
          <div className="flex gap-1 items-baseline text-white font-bold relative group">
           <i className="fa fa-home text-2xl group-hover:text-white/80 focus:text-white/80 transition-all duration-300" aria-hidden="true"></i>
           <span className='flex justify-center items-center size-4 bg-green)] aolute rounded-full text-xs -top-2 left-2 focus:bg-secondary group-hover:bg-secondary transition-all duration-300'>0</span>
           <a href="#" className='stretched-link group-hover:text-white/80 focus:text-white/80'>Clinics</a>
          </div>
          <div className="flex gap-1 items-baseline text-white font-bold relative group">
           <i className="fa fa-user-md text-2xl group-hover:text-white/80 focus:text-white/80 transition-all duration-300" aria-hidden="true"></i>
           <span className='flex justify-center items-center size-4 bg-green)] aolute rounded-full text-xs -top-2 left-2 focus:bg-secondary group-hover:bg-secondary transition-all duration-300'>0</span>
           <div className="relative group cursor-pointer">
            <a href="#" className='stretched-link group-hover:text-white/80 focus:text-white/80'>Doctors</a>
            <ul className='bg-white p-3 min-h-max min-w-max text-primary group-hover:block hidden absolute inset-0 [&_li]:mb-2'>
             {doctors.map((item, idx) => (
              <li key={idx}><a href="#">{item[0]?.[0]?.name}</a></li>
             ))}
            </ul>
           </div>
          </div>
          <div className="max-sm:w-full flex gap-8 justify-center">
           <Link href="/membership" className='btn btn-secondary font-bold'>Get Membership</Link>
           <Link href="/login" className='btn btn-primary font-bold'>Login</Link>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </header >
  </>
 )
}

export default Header;
