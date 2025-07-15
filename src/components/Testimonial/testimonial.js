import React from 'react'

const Testimonial = (
 {
  memberName,
  memberStatus,
  testimonialText,
  timeStatus
 }
) => {
 return (
  <>
   {(memberName || memberStatus || testimonialText) &&
    <section className='py-8 lg:py-12'>
     <div className="container">
      <div className="bg-white shadow-[7px_8px_15px_0_rgba(0,191,165,0.2)] pl-11 pt-9 pr-7 pb-6 rounded-lg">
       <div className="flex justify-between mb-6">
        {memberName &&
         <div className="[&_h2]:mb-[2px] [&_h2]:text-[var(--secondary)]">
          <h2 className='h4'>{memberName}</h2>
          <span className='text-[var(--primary)] pb-1'>
           <i class="fa fa-check-circle text-[var(--primary)] pr-1"></i>
           {memberStatus}</span>
         </div>
        }
        <div className="flex text-[var(--yellow)]">
         <i class="fa fa-star" aria-hidden="true"></i>
         <i class="fa fa-star" aria-hidden="true"></i>
         <i class="fa fa-star" aria-hidden="true"></i>
         <i class="fa fa-star" aria-hidden="true"></i>
         <i class="fa fa-star" aria-hidden="true"></i>
        </div>
       </div>
       {testimonialText &&
        <div className="mb-2">
         <p>{testimonialText}</p>
         <div className="flex items-center gap-1 text-[var(--primary)] justify-end">
          <i class="fa fa-clock" aria-hidden="true"></i>
          <span>{timeStatus}</span>
         </div>
        </div>
       }
      </div>
     </div >
    </section >
   }
  </>
 )
}

export default Testimonial;
