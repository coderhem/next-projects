'use client';
import React, { useEffect, useState } from 'react'
import headerLogo from "../../assets/images/header-logo.png";
import Navbar from '../Navbar/nav';

const Header = () => {

useEffect(() =>{
  const handleScroll = () =>{
    if(window.scrollY > 50){
      document.body.classList.add("sticky");
    }
    else{
      document.body.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return() =>{
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      <header className="header py-5 fixed top-0 left-0 right-0 z-10">
        <div className="container">
          <div className="flex justify-between items-center -mx-3">
            <div className="w-full lg:w-4/12 px-3">
              <figure>
                <img src={headerLogo.src} width={200} height={120} alt="Header Logo" loading='lazy' />
              </figure>
            </div>
            <div className="w-full lg:w-10/12 px-3">
              <Navbar />
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header;
