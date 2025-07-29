import React, { useState } from 'react'

const CardAccordion = (
  {
    accordionTitle,
    iconClass,
    accordionDescription,
  }
) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {(accordionTitle || iconClass || accordionDescription) &&
        <div className="accordion-item">
          <div className='accordion-title' onClick={() => { setIsOpen(!isOpen) }}>
            <strong>{accordionTitle}</strong>
            <div className={`icon ${isOpen ? 'rotate-180 !bg-[var(--primary)] !text-white' : ''}`}>
              <i className={iconClass}></i>
            </div>
          </div>
          <div className={`transition-all duration-300 ${isOpen ? 'mt-3 max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div dangerouslySetInnerHTML={{ __html: accordionDescription }} />
          </div>
        </div>
      }
    </>
  )
}

export default CardAccordion;
