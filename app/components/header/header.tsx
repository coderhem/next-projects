'use client';
import React, { useEffect, useRef, useState } from 'react';
import topHeaderData from './header.json';
import navLinksData from './header.json';
import Image from 'next/image';
import headerLogo from '../../../public/images/frame-hub-header-logo.png';
import Link from 'next/link';

interface topHeaderItem {
 anchorLink: string;
 targetValue: string;
 relValue: string;
 iconClass?: string;
 iconSvg?: string;
}
interface headerLinks {
 navAnchorText: string;
 navAnchorLink: string;
}


const Header: React.FC = ({ }) => {
 const [active, setActive] = useState(false);

 const handleClick = () => {
  setActive((prev) => !prev);
 }

 useEffect(() => {
  if (active) {
   document.body.classList.add("active");
  }
  else {
   document.body.classList.remove("active");
  }
 }, [active]);
 // Header Active

 const headerRef = useRef<HTMLDivElement>(null);
 const [headerHeight, setHeaderHeight] = useState(0);

 useEffect(() => {
  if (headerRef.current) {
   setHeaderHeight(headerRef.current.offsetHeight);
  }

  // Optional: recalc on window resize
  const handleResize = () => {
   if (headerRef.current) {
    setHeaderHeight(headerRef.current.offsetHeight);
   }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 // Header Height Measure Code

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY > 30) {
    document.body.classList.add("scroll");
   } else {
    document.body.classList.remove("scroll");
   }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  <>

   {/* Start Top Header */}
   <header className='header' ref={headerRef}>
    <div className="bg-primary py-3 text-center top-header">
     <div className="container">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-3">
       {topHeaderData.topHeader && topHeaderData.topHeader.length > 0 && (
        <ul className='flex gap-3 [&_li_a]:bg-lovry [&_li_a]:border [&_li_a]:border-brown/30 [&_li_a]:rounded-full [&_li_a]:p-2 [&_li_a]:size-10 [&_li_a]:inline-flex [&_li_a]:justify-center [&_li_a]:items-center [&_li_a]:hover:bg-green [&_li_a]:focus:bg-green [&_li_a]:active:bg-green [&_li_a]:focus:text-white! [&_li_a]:active:text-white! [&_li_a]:hover:text-white! [&_li_a]:transition-all [&_li_a]:duration-300 [&_li_a]:text-xl [&_li_a]:focus:ring-3 [&_li_a]:focus:border-white [&_li_a]:focus:ring-light-gray/70'>
         {topHeaderData.topHeader.map((item: topHeaderItem, index: number) => (
          <li key={index}>
           <a href={item.anchorLink} target={item.targetValue} rel={item.relValue}>
            {item.iconClass &&
             <i className={item.iconClass}></i>
            }
            {item.iconSvg &&
             <span dangerouslySetInnerHTML={{ __html: item.iconSvg }}
             />
            }
           </a>
          </li>
         ))}
        </ul>
       )}
       <div className="flex items-center -mx-5">
        <div className="px-5">
         <div className="[&_a]:text-white! [&_a]:text-2xl [&_a]:relative flex gap-8">
          <Link href="/cart">
           <i className="fa fa-shopping-cart" aria-hidden="true"></i>
           <span className='absolute bg-pink -right-3 text-white text-xs rounded-full size-4 inline-flex justify-center items-center'>0</span>
          </Link>
          <Link href="/login">
           <i className="fa fa-user" aria-hidden="true"></i>
          </Link>
         </div>
        </div>
        <div className="search-form px-5">
         <form action="" id='search-form'>
          <div className="form-group">
           <input type="text" placeholder='Search Here...' id='search' name='search' className='form-control' />
           <i className="fa fa-search"></i>
          </div>
         </form>
        </div>
        {/* <span>Grand Opening Buy form <a href="#">Here !</a> and Grab 20% Off All Premium Frames at FrameHub! </span> */}
       </div>
      </div>
     </div>
    </div >
    {/* Ends Top Header */}

    <div className="main-header">
     <div className="container">
      <div className="flex items-center justify-between">
       <div className="relative">
        <figure className='max-w-48 md:max-w-full'>
         <Image
          src={headerLogo}
          width={250}
          height={80}
          alt='Header Logo'
          loading='lazy'
         />
        </figure>
        <Link href="/" className='stretched-link'></Link>
       </div>
       <nav className='navbar'>
        {navLinksData.navLinks && navLinksData.navLinks.length > 0 && (
         <ul className='hidden lg:flex gap-10'>
          {navLinksData.navLinks?.map((item: headerLinks, index: number) => (
           <li key={index}><Link href={item.navAnchorLink}>{item.navAnchorText}</Link></li>
          ))}
         </ul>
        )}
       </nav>
       <nav className='mobile-navbar' style={{ top: headerHeight }}>
        {navLinksData.navLinks && navLinksData.navLinks.length > 0 && (
         <ul className='container'>
          {navLinksData.navLinks?.map((item: headerLinks, index: number) => (
           <li key={index}><Link href={item.navAnchorLink}>{item.navAnchorText}</Link></li>
          ))}
         </ul>
        )}
       </nav>
       <button className="hamBurger" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
       </button>
      </div>
     </div>
    </div>
   </header>
  </>
 );
};

export default Header;
