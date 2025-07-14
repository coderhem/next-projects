import React from 'react'

const HeroList = (
 {
  listContent,
  iconClass,
  listWrapper

 }
) => {
 return (
  <>
   <ul className={`${listWrapper} pt-5 [&_li]:relative [&_li]:pl-6`}>
    {listContent &&
     <li>
      {iconClass &&
       <i className={`${iconClass} absolute left-0 top-1 text-[var(--primary)]`}></i>
      }
      {listContent}
     </li>
    }
   </ul >
  </>
 )
}

export default HeroList
