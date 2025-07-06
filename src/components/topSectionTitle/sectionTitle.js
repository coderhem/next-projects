import React from 'react'

const SectionTitle = (
 {
  titleText,
  orangeText,
  titleDescription
 }

) => {
 return (
  <>
   <div className="text-center max-w-3xl mx-auto">
    <h2 className='relative pb-1 inline-block before:absolute before:bottom-0 before:left-0 before:w-4/12 before:bg-primary before:h-1 before:rounded-b-full'>{titleText} <span className="text-primary">{orangeText}</span></h2>
    <p>{titleDescription}</p>
   </div>
  </>
 )
}

export default SectionTitle;
