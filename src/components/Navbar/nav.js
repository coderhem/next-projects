import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
       <ul className='flex flex-wrap -mx-4 justify-end [&_li]:px-4'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Snippets</a></li>
        <li><a href="#">Templates</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Primeium</a></li>
       </ul>
      </nav>
    </>
  )
}

export default Navbar;
