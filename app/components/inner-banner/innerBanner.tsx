import React from 'react'

const InnerBanner = () => {
 return (
  <>

   <section className='bg-pink/5 pt-64 md:pt-48 lg:pt-32 pb-10'>
    <div className="container">
     <div className="text-2xl">
      <h1 className='h2 capitalize! text-primary'>Shooping Cart</h1>
      <ul className='flex items-center gap-4 text-base font-semibold [&_a]:text-pink! [&_a:hover]:text-pink/70!'>
       <li>
        <a href="/">Home</a>
       </li>
       <li><i className="fa fa-angle-right" aria-hidden="true"></i>
       </li>
       <li>Cart</li>
      </ul>
     </div>
    </div>
   </section>

  </>
 )
}

export default InnerBanner
