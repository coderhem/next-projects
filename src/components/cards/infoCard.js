import React from 'react'

const InfoCard = (
  {
    iconClass,
    serviceTitle,
    descText,
    extraClassName
  }

) => {
  return (
    <>
      {iconClass && serviceTitle && descText &&
        <div className="bg-gray-100 h-full border border-primary/10 text-center py-5 px-7 rounded-md hover:shadow-[0_0_10px_0_rgba(255,118,1,0.6)] transition-all duration-300">
          {iconClass &&
            <div className="flex justify-center items-center bg-primary/90 rounded-full size-14 mx-auto p-5 [&_i]:!text-3xl mb-7">
              <i className={`${iconClass}`} aria-hidden="true"></i>
            </div>
          }
          {serviceTitle && descText &&
            <div div className="[&_h2]:text-primary text-white/60">
              <h2 className='h5'>{serviceTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: descText }} />
            </div>
          }
        </div >
      }
    </>
  )
}

export default InfoCard;
