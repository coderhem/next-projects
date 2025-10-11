import HeroList from '@/components/ListStyle/tickList';
import React, { Children } from 'react'

const CardAcademic = ({
  children
}) => {
  return (
    <>
      <div className="bg-white shadow-[0_0_20px_0_rgba(0,191,165,0.25)] p-5">
        {children}
      </div>
    </>
  )
}

export default CardAcademic;
