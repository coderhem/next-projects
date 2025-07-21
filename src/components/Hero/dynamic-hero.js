"use client";
import React from 'react'
import CopyCode from '../CopyCode/copy';

const DynamicHero = (
 {
  imageSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  heroCode
 }

) => {
 return (
  <>
   <div className="relative [&_img]:w-full [&_img]:h-full min-h-max [&_img]:object-cover h-full">
    <img src={imageSrc} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />
    <CopyCode
     code={heroCode}
     buttonClassName='absolute bottom-5 right-5 z-[1] bg-white py-1 px-2 rounded border border-primary'
    />
   </div>
  </>
 )
}

export default DynamicHero;
