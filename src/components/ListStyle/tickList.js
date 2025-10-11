import React from 'react'

const TickList = (
 {
  listContent,
  iconClass,
  listWrapper

 }
) => {
 return (
  <>
   <ul className={`${listWrapper} pt-5 [&_li]:relative [&_li]:pl-6 flex flex-wrap justify-between`}>
    {listContent?.map((item, index) => (
     <li key={index} className='w-full md:w-1/2'>
      {iconClass &&
       <i className={`${iconClass} absolute left-0 top-1 text-primary`}></i>
      }
      {item}
     </li>
    ))}

   </ul >
  </>
 )
}

export default TickList;
