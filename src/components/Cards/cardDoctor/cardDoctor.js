import React, { act, useEffect, useState } from 'react';
import listData from '../../Data/data.json';

const CardDoctor = (
  {
    id,
    imgSrc,
    imgWidth,
    imgHeight,
    imgAlt,
    doctorName,
    doctorPost,
    speciality,
    experience,
    ctaLink,
    star,
    outlineCtaText,
    secondaryCtaText,
    btnOutline,
    btnOutlineLink,
    btnSecondary,
    btnSecondaryLink,
    iconClass
  }
) => {

  const [activeMap, setActiveMap] = useState(() => {
    const saved = localStorage.getItem('activeMap');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('activeMap', JSON.stringify(activeMap));
  }, [activeMap]);

  const [doctorNameList, setDoctorName] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("doctorName");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  console.log(doctorNameList, "Test1");

  useEffect(() => {
    localStorage.setItem('doctorName', JSON.stringify(doctorNameList));
  }, [doctorNameList]);

  const toggleActive = (id, name) => {
    const newDoctor = { name: name }
    setActiveMap(prev => ({ ...prev, [id]: !prev[id] }));
    setDoctorName([{ ...doctorNameList, newDoctor }])

  };

  return (
    <>
      <div className="bg-white shadow rounded-lg">
        <div className="flex items-center px-5 pt-5 gap-7">
          {imgSrc && (
            <figure className='min-w-40 max-w-30 flex-1 [&_img]:w-full [&_img]:shadow-[0_0_25px_0_rgba(0,191,165,0.3)] [&_img]:rounded-3xl [&_img]:border-2 [&_img]:border-primary/20'>
              <img src={imgSrc} width={imgWidth} height={imgHeight} alt={imgAlt} loading='lazy' />
            </figure>
          )}
          {(doctorName || doctorPost || speciality || experience || iconClass) &&
            <div className="text-gray">
              <h2 className='h6  text-black'>{doctorName}</h2>
              <span className='text-black font-medium'>{doctorPost}</span>
              <div className="[&_p]:!mb-1">
                <p>{speciality}</p>
                <p>{experience}</p>
              </div>
              <div className={`icon-heart group hover:bg-primary mt-2 ${activeMap[id] ? 'active bg-primary text-white' : 'text-primary bg-transparent'}`}>
                <a href={ctaLink} className={`stretched-link`} onClick={() => toggleActive(id, doctorName)}>
                  <i className={`${iconClass} focus:text-white group-focus:text-white group-hover:text-white transition-all duration-300`}></i>
                </a>
              </div>
            </div>
          }
        </div>
        <div className="pt-5 px-6 pb-5">
          <ul>
            {listData.doctorCardData[0].listDetails.map((item, index) => {
              return (
                <li key={index}><strong>{item.strongText}</strong>: {item.listText}</li>
              )
            })}
          </ul>
          <ul className='pt-2 text-yellow flex gap-1'>
            {[...Array(5)].map((_, index) => (
              <li key={index}><i className={`${star} fa fa-star`}></i></li>
            ))}
          </ul>
        </div>

        {(btnOutlineLink || btnSecondaryLink) &&
          <div className="bg-primary/10 py-4 px-5 flex justify-between gap-5 rounded-bl-2xl rounded-br-2xl">
            {btnOutline &&
              <a href={btnOutlineLink} className={`${btnOutline}`}>{outlineCtaText}</a>
            }
            {btnSecondary &&
              <a href={btnSecondaryLink} className={`${btnSecondary}`}>{secondaryCtaText}</a>
            }
          </div>
        }
      </div >
    </>
  )
}

export default CardDoctor
