import React from 'react'
import CopyCode from '../CopyCode/copy';

const DynamicSlider = ({
 imageSrc,
 imgWidth,
 imgHeight,
 imgAlt,
 copyCode,
 jscopyCode
}) => {
 return (
  <>
   <div className="[&_img]:w-full [&_img]:h-full">
    <img src={imageSrc} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />
    <div className="absolute bottom-5 right-5 z-[1] flex gap-2 mr-5">
     <CopyCode
      code={copyCode}
      buttonClassName="bg-white py-1 px-2 rounded border border-primary"
      jsCode={jscopyCode}
     />
    </div>
   </div>
  </>
 )
}

export default DynamicSlider;
