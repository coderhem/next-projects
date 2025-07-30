import React from 'react'

const CtaBtn = (
 {
  ctaText,
  ctaLink,
  iconClass,
  ctaClass,
  ctaBtnClass
 }
) => {
 return (
  <>
   {(ctaText || ctaLink || iconClass) &&
    <div className={`${ctaClass} relative flex items-center gap-2 group max-w-max`}>
     <a href={ctaLink} className={`${ctaBtnClass} stretched-link phone-call`}>
      <i className={`${iconClass}`}></i>
     </a>
     <span className="group-hover:text-[var(--primary)] transition-all duration-300">{ctaText}</span>
    </div>
   }
  </>
 )
}

export default CtaBtn
