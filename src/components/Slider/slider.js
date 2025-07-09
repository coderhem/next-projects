'use client';
import React from 'react'
import SectionTitle from '../SectionTitle/sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import DynamicSlider from './dynamicSlider';
import sliderData from './slides.json';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>

      <div className="py-16">
        <SectionTitle
          orangeText="Discover"
          sectionTitle="Our Highlights"
          descriptionText="Explore our top features, client success stories, and project showcases through this dynamic slider. Swipe to see what makes us stand out."
        />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
          className="px-4"
        >
          {sliderData.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <DynamicSlider
                imageSrc={slide.imageSrc}
                imgWidth={slide.imgWidth}
                imgHeight={slide.imgHeight}
                imgAlt={slide.imgAlt}
                copyCode={slide.copyCode}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  )
}

export default Slider;
