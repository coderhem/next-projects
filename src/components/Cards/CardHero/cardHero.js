import React from 'react';

const CardHero = (
 {
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  fullName,
  postName,
  ctaText,
  ctaLink,
  targetBlank
 }

) => {
 return (
  <>
   {imgSrc &&
    <div className="relative z-[2] before:absolute before:w-full before:h-full before:-left-5 before:right-0 before:top-0 before:bottom-0 before:z-[-1] before:rounded-full before:bg-[var(--sky-blue)] max-w-96 rounded-full [&_img]:border-8 [&_img]:border-white mx-auto [&_img]:w-full [&_img]:rounded-full mb-10">
     <img src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />
    </div>
   }
   <div className="text-center [&_h2]:mb-1 text-white">
    {fullName &&
     <h2 className='h4'>{fullName}</h2>
    }
    {postName &&
     <h3 className='h6 text-lg font-normal'>{postName}</h3>
    }
    {ctaText &&
     <div className="pt-5">
      <a href={ctaLink} target={targetBlank} className='btn btn-white'>{ctaText}</a>
     </div>
    }
   </div>
  </>
 )
}

export default CardHero
