"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import herImg01 from "../../assets/images/hero/hero-01.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Hero = () => {
 return (
  <>
   <div className="container">
    <div className="flex justify-between -mx-5">
     <div className="w-full lg:w-1/2 px-5 [&_h1]:text-white [&_h1]:leading-[1.2]">
      <h1>No More Starting From Scratch.</h1>
      <p>Copy, Paste, Customize & Build websites with production-ready code. Access ready-made UI snippets and components to supercharge your web development.</p>
     </div>
     <div className="w-full lg:w-1/2 px-5">
      <Swiper
       pagination={{
        clickable: true
       }}
       navigation={true}
       modules={[Pagination, Navigation]}
       className="mySwiper"
      >
       <SwiperSlide>
        <img src={herImg01.src} width={1200} height={500} alt="Hero Image 01" loading='lazy' />
        {/*
        <section class="relative pt-[184px] ">
         <div class="container">
          <div class="flex flex-wrap lg:mx-[-50px] justify-between items-center">
           <div class="md:w-full lg:w-[47%] lg:px-[50px] text-white pb-7 md:pb-10">
            <h1 class="pb-5">Trusted Property Damage Experts</h1>
            <h2 class="text-[18px] text-white">Over 30 Years of Accurate Estimation & Consulting</h2>
            <p>We provide independent and precise assessments for homeowners, contractors, and insurance companies. Our team is dedicated to offering reliable, unbiased services to ensure fair claim settlements and efficient project management.</p>
            <div class="pt-6 mb-8">
             <a href="#footerForm" class="js-has-smooth btn btn-white">Contact Us</a>
            </div>
            <ul class="flex flex-wrap gap-y-5 items-center [&_li]:flex [&_li]:items-center [&_li]:gap-[10px] [&_li:not(:last-child)]:mr-10 [&_li]:font-medium">
             <li>
              <i class="icon-tick text-xl text-white"></i>
              Experienced
             </li>
             <li>
              <i class="icon-tick text-xl text-white"></i>
              Trusted
             </li>
             <li>
              <i class="icon-tick text-xl text-white"></i>
              Professional
             </li>
            </ul>
           </div>
           <div class="w-full md:w-full lg:w-[48%] lg:px-[50px] max-lg:flex max-lg:justify-center">
            <figure>
             <img src="assets/images/banner-image.png" width="470" height="588" alt="Banner Featured Image" loading="lazy">
            </figure>
           </div>
          </div>
         </div>
        </section>
        */}
       </SwiperSlide>
       <SwiperSlide>Slide 2</SwiperSlide>
       <SwiperSlide>Slide 3</SwiperSlide>
       <SwiperSlide>Slide 4</SwiperSlide>
       <SwiperSlide>Slide 5</SwiperSlide>
       <SwiperSlide>Slide 6</SwiperSlide>
       <SwiperSlide>Slide 7</SwiperSlide>
       <SwiperSlide>Slide 8</SwiperSlide>
       <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     </div>
    </div>
   </div>
  </>
 )
}

export default Hero;
