import React from 'react'

const CardDoctor = (
 {
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  doctorName,
  doctorPost,
  speciality,
  experience,
  ctaLink
 }
) => {
 return (
  <>
   <div className="bg-white shadow px-5 pt-5 rounded-lg">
    <div className="flex items-center">
     <figure className='min-w-[200px] max-w-2xs flex-1 [&_img]:w-full'>
      <img src={imgSrc.src} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />
     </figure>
     <div className="text-black">
      <h2 className='h4'>{doctorName}</h2>
      <span>{doctorPost}</span>
      <div className="[&_p]:!mb-0">
       <p>{speciality}</p>
       <p>{experience}</p>
      </div>
      <div className="relative border-[var(--gray)] border inline-flex justify-center items-center size-7 rounded-full group hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300">
       <a href={ctaLink} className='stretched-link'>
        <i className="fa fa-heart group-hover:text-white transition-all duration-300"></i>
       </a>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default CardDoctor
