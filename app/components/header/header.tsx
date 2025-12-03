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

   <header className='header' ref={headerRef}>
    <div className="bg-primary py-3 text-center top-header">
     <div className="container">
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3">
       <div className="text-light-gray [&_a]:underline  [&_a]:hover:no-underline">
        <span>Grand Opening Buy form <a href="#">Here !</a> and Grab 20% Off All Premium Frames at FrameHub! </span>
       </div>
       {topHeaderData.topHeader && topHeaderData.topHeader.length > 0 && (
        <ul className='flex gap-3'>
         {topHeaderData.topHeader.map((item: topHeaderItem, index: number) => (
          <li key={index} className='[&_a]:bg-lovry [&_a]:border [&_a]:border-brown/30 [&_a]:rounded-full [&_a]:p-2 [&_a]:size-10 [&_a]:inline-flex [&_a]:justify-center [&_a]:items-center [&_a]:hover:bg-transparent [&_a]:transition-all [&_a]:duration-300 [&_a]:text-xl [&_a]:focus:ring-3 [&_a]:focus:border-white [&_a]:focus:ring-light-gray/70'>
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
      </div>
     </div>
    </div >
    {/* Top Header */}
    <div className="main-header">
     <div className="container">
      <div className="flex items-center justify-between">
       <div className="relative">
        <figure>
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
         <ul>
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
