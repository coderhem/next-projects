import React from 'react'
import listData from "../../Data/data.json";
import imgSrc from "../../../assets/images/clinic-card.png";
const CardClinic = (
 {
  iconClass,
  heilightText,
  clinicName,
  clinicDescription,
  btnOutline,
  outlineCtaText,
  btnOutlineLink,
  btnSecondaryLink,
  secondaryCtaText,
  btnSecondary,
 }
) => {
 return (
  <>
   {(clinicName || heilightText || iconClass || imgSrc) &&
    <div className="bg-white shadow relative z-[1] before:absolute before:inset-0 before:bg-[url('../assets/images/clinic-card-bg-img.png')] before:z-[-1] before:bg-cover before:bg-no-repeat before:bg-bottom">
     {imgSrc &&
      <figure className="[&_img]:w-full">
       <img src={imgSrc.src} alt="" />
      </figure>
     }
     <div className="px-5">
      <div className="flex justify-between gap-5 items-center">
       <h2 className='h6'>{clinicName} <span className='text-[var(--primary)]'>{heilightText}</span></h2>
       <div className="icon-heart group mt-2 mb-4">
        <a href="#" className='stretched-link'>
         <i className={`${iconClass} text-[var(--primary)] focus:text-white group-focus:text-white group-hover:text-white transition-all duration-300`}></i>
        </a>
       </div>
      </div>
      <p>{clinicDescription}</p>
      <div className="flex gap-1 items-center">
       <ul>
        {listData.clinicCardData[0].listDetails.map((item, index) => {
         return (
          <li key={index}><strong className='text-[var(--primary)]'>{item.blueText}</strong> {item.time}</li>
         )
        })}
       </ul>
      </div>
     </div>

     {(btnOutlineLink || btnSecondaryLink) &&
      <div className="pb-7 pt-6 px-5 flex justify-between gap-5 rounded-bl-2xl rounded-br-2xl">
       {btnOutline &&
        <a href={btnOutlineLink} className={`${btnOutline}`}>{outlineCtaText}</a>
       }
       {btnSecondary &&
        <a href={btnSecondaryLink} className={`${btnSecondary}`}>{secondaryCtaText}</a>
       }
      </div>
     }
    </div >
   }
  </>
 )
}

export default CardClinic;
