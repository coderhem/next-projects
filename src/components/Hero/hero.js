"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import DynamicHero from './dynamicHero';
import heroData from './heroCode.json'

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap justify-between -mx-5">
          <div className="w-full lg:w-1/2 px-5 [&_h1]:text-white [&_h1]:leading-[1.2] max-lg:mb-10">
            <h1>No More Starting From Scratch.</h1>
            <p>Copy, Paste, Customize & Build websites with production-ready code. Access ready-made UI snippets and components to supercharge your web development.</p>
          </div>

          <div className="w-full lg:w-1/2 px-5 hero-slider">
            <Swiper
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination]}
              className="min-h-80"
              autoHeight={true}
            >
              {heroData.heroCode1.map((item, index) => {
                return (
                  <SwiperSlide key={index} className='!h-full'>
                    <DynamicHero
                      imageSrc={item.imageSrc}
                      imgWidth={item.imgWidth}
                      imgHeight={item.imgHeight}
                      imgAlt={item.imgAlt}
                      heroCode={item.heroCode}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
