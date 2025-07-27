import React from 'react'

const CardClinic = (
 {
  ctaLink,
  iconClass,
  heilightText,
  clinicName,
  clinicDescription,
  hours,
  time,
  btnOutlineLink,
  btnSecondaryLink,
  
 }
) => {
 return (
  <>
   <div className="bg-white shadow pl-4 pr-8 relative">
    <div className="">
     {(clinicName || heilightText || iconClass) &&
      <div className="flex justify-between gap-5 items-center">
       <h2 className='h6'>{clinicName} <span className='text-[var(--primary)]'>{heilightText}</span></h2>
       <div className="icon-heart group mt-2 mb-4">
        <a href="#" className='stretched-link'>
         <i className={`${iconClass} fa fa-heart text-[var(--primary)] focus:text-white group-focus:text-white group-hover:text-white transition-all duration-300`}></i>
        </a>
       </div>
      </div>
     }
     <p>{clinicDescription}</p>
     <div className="flex gap-1 items-center">
      <ul>
       <li><strong className='text-[var(--primary)]'>{hours}</strong>{time}</li>
      </ul>
     </div>
    </div>

    {(btnOutlineLink || btnSecondaryLink) &&
     <div className="bg-[var(--primary)]/10 py-4 px-5 flex justify-between gap-5 rounded-bl-2xl rounded-br-2xl">
      {btnOutline &&
       <a href={btnOutlineLink} className={`${btnOutline}`}>{outlineCtaText}</a>
      }
      {btnSecondary &&
       <a href={btnSecondaryLink} className={`${btnSecondary}`}>{secondaryCtaText}</a>
      }
     </div>
    }
   </div >
  </>
 )
}

export default CardClinic;
