import React from 'react'

const CardProcess = (
 {
  cardIcon,
  cardTitle,
  cardDescription

 }
) => {
 return (
  <>
   {(cardIcon || cardDescription || cardTitle) &&
    <div className="flex justify-center items-end gap-1 text-white">
     <div className="bg-[url('../assets/images/icon-bg.png')] bg-top bg-cover bg-no-repeat [&_i]:size-20 text-center text-3xl">
      <i className={`${cardIcon} !flex justify-center items-center`} aria-hidden="true"></i>
     </div>
     {cardTitle && cardDescription &&
      <div className="[&_p]:!mb-0">
       <h2 className='h5'>{cardTitle}</h2>
       <p>{cardDescription}</p>
      </div>
     }
    </div>
   }
  </>
 )
}

export default CardProcess
