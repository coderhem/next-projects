import React from 'react'

const CardInfo = (
  {
    cardBgClass,
    cardIcon,
    cardTitle,
    cardDescription,
    btnClass,
    targetBlank,
    ctaText,
    ctaLink
  }
) => {
  return (
    <>
      {(cardIcon || cardTitle || cardDescription || ctaText) &&
        <div className={ `${cardBgClass} text-white text-center [&_h3]:uppercase py-8 px-5 [&_i]:text-5xl md:max-w-[334px] rounded-md`}>
          {cardIcon &&
            <div className="mb-4">
              <i className={cardIcon} aria-hidden="true"></i>
            </div>
          }
          {cardTitle &&
            <div className="mb-1">
              <h3 className='h4'>{cardTitle}</h3>
            </div>
          }
          {cardDescription &&
            <div dangerouslySetInnerHTML={{ __html: cardDescription }} />
          }
          {ctaLink && btnClass && ctaText &&
            <div className="pt-7">
              <a href={ctaLink} className={btnClass} target={targetBlank}>{ctaText}</a>
            </div>
          }
        </div >
      }
    </>
  )
}

export default CardInfo;
