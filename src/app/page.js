'use client';
import Hero from "@/components/Hero/hero";
import Testimonial from "@/components/Testimonial/testimonial";
import testimonialSlider from "../components/Data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialSlider.testimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Testimonial
                memberName={item.memberName}
                memberStatus={item.memberStatus}
                testimonialText={item.testimonialText}
                timeStatus={item.timeStatus}
              />
            </SwiperSlide>
          );
        })}

      </Swiper>
    </>
  );
}
