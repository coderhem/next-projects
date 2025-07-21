import React from 'react'

const SectionTitle = ({ sectionTitle, descriptionText, orangeText }) => {
 return (
  <>
   <div className="pb-5 lg:pb-10 text-center max-w-3xl mx-auto [&_h2]:mb-1">
    {sectionTitle &&
     <h2><span className='text-[var(--orange)]'>{orangeText}</span> {sectionTitle}</h2>
    }
    {descriptionText &&
     <p>{descriptionText}</p>
    }
   </div>
  </>
 )
}

export default SectionTitle;
