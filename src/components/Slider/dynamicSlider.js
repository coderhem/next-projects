import React from 'react'
import CopyCode from '../CopyCode/copy';

const DynamicSlider = ({
 imageSrc,
 imgWidth,
 imgHeight,
 imgAlt,
 copyCode
}) => {
 return (
  <>
   <div className="container [&_img]:w-full">
    <img src={imageSrc} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />
    <CopyCode
     code={copyCode}
     buttonClassName='absolute bottom-5 right-5 z-[1] bg-white py-1 px-2 rounded border border-primary'
    />
   </div>
  </>
 )
}

export default DynamicSlider;
