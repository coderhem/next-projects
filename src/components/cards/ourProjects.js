import React from 'react'

const OurProjects = (
 {
  imgName,
  imgWidth,
  imgHeight,
  imgAlt,
  ctaText,
  ctaLink,
  descText
 }

) => {
 return (
  <>
   <div className="h-full before:bg-primary/10">
    <div className="rounded-3xl relative before:absolute before:inset-0  before:blur-3xl before:z-[-1] group h-full">
     <div className="min-h-80 max-h-80 overflow-hidden group-hover:[&_img]:scale-105 [&_img]:transition-all [&_img]:duration-500 [&_img]:w-full">
      <img src={imgName} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />

     </div>
     {(ctaLink || descText || ctaText) &&
      <div className="p-5 bg-white/10 [&_a]:pb-3 rounded-b-lg projectCard">
       {ctaLink &&
        <a href={ctaLink} className='stretched-link'>{ctaText}</a>
       }
       {descText &&
        <div dangerouslySetInnerHTML={{ __html: descText }} />
       }
      </div>
     }
    </div >
   </div>

  </>
 )
}

export default OurProjects;
