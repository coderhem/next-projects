import React, { Children } from 'react'

const CardSpecializations = (
  {
    children
  }
) => {

  return (
    <>
      <div className="bg-primary border hover:bg-transparent border-primary p-3 rounded-tr-3xl rounded-bl-3xl text-white w-full h-full text-center transition-all duration-300 flex items-center justify-center">
        {children}
      </div>
    </>
  )
}

export default CardSpecializations;
