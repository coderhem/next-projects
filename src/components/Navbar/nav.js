import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({
  headerHeight
}) => {

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('active');
    }
    else {
      document.body.classList.remove('active');
    }
  }, [isOpen]);
  // Header Active
  
  const mobileMenu = useRef(null);

  return (
    <>
      <div className={`${isOpen ? 'active' : ''}`}>
        <nav className='nav'>
          <ul className='flex flex-wrap -mx-4 justify-end [&_li]:px-4'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Snippets</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Primeium</a></li>
          </ul>
        </nav>
        <div className="mobile-menu" ref={mobileMenu} style={{marginTop: isOpen ? `${headerHeight}px` : '0px'}}>
          <nav className='container'>
            <ul className='flex flex-col [&_li]:mb-4'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Snippets</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Primeium</a></li>
            </ul>
          </nav>
        </div>
        <div className="hambBurger group" onClick={() => {
          setIsOpen(!isOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default Navbar;
