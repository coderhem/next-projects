import React from 'react'
import headerLogo from '../../assets/images/header-logo.png'

const Header = () => {
 return (
  <>
   <header className=''>
    <div className="bg-[var(--green)] text-[var(--secondary)] font-extrabold py-3 text-sm md:text-base">
     <div className="container">
      <div className="flex flex-wrap gap-y-1 gap-2 justify-center lg:justify-between items-center">
       <span className='text-center lg:text-start'>Get 20% off on your first consultation! Book Now.</span>
       <div className="flex justify-center flex-wrap gap-y-1 gap-5">
        <div className="relative flex items-center gap-2 group">
         <i className="fa fa-phone-square group-hover:text-[var(--secondary)]/80 focus:text-[var(--secondary)]/80 transition-all" aria-hidden="true"></i>
         <a href="tel:0123456789" className='stretched-link !text-[var(--secondary)] group-hover:!text-[var(--secondary)]/80 group-hover:!underline focus:text-[var(--secondary)]'>Office: 0123456789</a>
        </div>
        <div className="relative flex items-center gap-2 group">
         <i className="fa fa-ambulance group-hover:text-[var(--secondary)]/80 focus:text-[var(--secondary)]/80 transition-all" aria-hidden="true"></i>
         <a href="tel:0123456789" className='stretched-link !text-[var(--secondary)] group-hover:!text-[var(--secondary)]/80 group-hover:!underline focus:text-[var(--secondary)]'>Emergency Line: 0123456789</a>
        </div>
       </div>
      </div>
     </div>
    </div>
    {/* Top Header */}

    <div className="bg-[var(--primary)] py-10">
     <div className="container">
      <div className="flex justify-between">
       <div className="max-w-[178px]">
        <img src={headerLogo.src} width={178} height={52} alt="Header Logo" loading='lazy' />
       </div>
       <div className="min-w-5/12 bg-white rounded p-2 flex items-center">
        <span className='bg-[var(--primary)] size-10 inline-flex justify-center items-center text-white rounded'>
         <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <form action="#" className='flex items-center'>
         <div className="pl-3 [&_input]:focus-within:outline-0 min-w-2xs">
          <input type="text" name="" id="" className='w-full' placeholder="Find what you're looking for..." />
         </div>
         <div className=''>
          <select name="" id="">
           <option value="">
            Categories
           </option>
          </select>
         </div>
        </form>
       </div>
       <div className="3/12">
        <div className="flex flex-wrap items-center gap-2">
         <div className="flex gap-1 items-baseline text-white font-bold">
          <i class="fa fa-home text-2xl font-normal" aria-hidden="true"></i>
          <a href="#">Clinics</a>
         </div>
         <div className="flex gap-1 items-baseline text-white font-bold relative">
          <i class="fa fa-user-md text-2xl" aria-hidden="true"></i>
          <span className='flex justify-center items-center size-4 bg-[var(--green)] absolute rounded-full text-xs -top-2 left-2'>0</span>
          <a href="#" className='stretched-link'>Doctors</a>
         </div>
         <a href="#" className='btn btn-secondary font-bold'>Get Membership</a>
         <a href="#" className='btn btn-primary font-bold'>Offers</a>
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
