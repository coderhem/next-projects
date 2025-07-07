import React from 'react'
import headerLogo from "../../assets/images/logo.png";
import Navbar from '../Navbar/nav';

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-2xl p-5">
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
