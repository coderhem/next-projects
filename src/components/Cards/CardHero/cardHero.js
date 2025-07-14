import React from 'react';
import cardImage from '../../../assets/images/image.png';

const CardHero = () => {
 return (
  <>
   <div className="">
    <div className="relative z-[2] before:absolute before:w-full before:h-full before:-left-5 before:right-0 before:top-0 before:bottom-0 before:z-[-1] before:rounded-full before:bg-[var(--sky-blue)] max-w-96 rounded-full [&_img]:border-8 [&_img]:border-white mx-auto [&_img]:w-full [&_img]:rounded-full mb-10">
     <img src={cardImage.src} width={568} height={568} alt="" />
    </div>
    <div className="text-center [&_h2]:mb-1 text-white">
     <h2 className='h4'>Hem Raj Joshi</h2>
     <h3 className='h6'>Developer (Full Stack)</h3>
     <div className="pt-12">
      <a href="#" className='btn btn-white'>Find Doctors</a>
     </div>
    </div>
   </div>
  </>
 )
}

export default CardHero
