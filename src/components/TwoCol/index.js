'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import twoColDataJson from './two-col.json';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import DynamicSlider from '../Slider/dynamic-slider';
import 'swiper/css';

const TwoCol = () => {
 return (
  <>
   <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={1}
    spaceBetween={40}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 800000 }}
    loop={true}
    autoHeight={true}
    breakpoints={{
     768: { slidesPerView: 2 }
    }}
    className="px-4"
   >
    {twoColDataJson.twoColData.map((slide, index) => (
     <SwiperSlide key={index}>
      <DynamicSlider
       imageSrc={slide.imageSrc}
       imgWidth={slide.imgWidth}
       imgHeight={slide.imgHeight}
       imgAlt={slide.imgAlt}
       copyCode={slide.copyCode}
       jscopyCode={slide.jscopyCode}
      />
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 )
}

export default TwoCol;
