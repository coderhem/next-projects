import React from 'react'

const BlockTitle = (
 {
  titleText,
  descriptionText,
  greenColor,
  className
 }
) => {
 return (
  <>
   <div className={` ${className} [&_h2]:text-black text-gray text-center max-w-3xl mx-auto [&_h2]:mb-2`}>
    <h2>{titleText} <span className='text-primary'>{greenColor}</span></h2>
    <div dangerouslySetInnerHTML={{ __html: descriptionText }} />
   </div>
  </>
 )
}

export default BlockTitle
