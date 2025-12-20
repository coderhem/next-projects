'use client';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import RectangleFlow from '../animations/rectangleFlow';
import heroSliderContent from './hero.json';
import Link from 'next/link';

interface HeroSlider {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  btnLink: string;
  btnText: string;
}


const Hero: React.FC = ({ }) => {
  return (
    <>
      <section className='text-white/90 after:absolute after:inset-0 after:bg-[url("/images/hero-bg.jpg")] after:-z-3 relative z-1 bg-no-repeat bg-center before:absolute before:inset-0 before:bg-black/90 before:-z-2 pt-64 lg:pt-48'>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-7/12 max-lg:mb-10">
              <h1>Frame Your Memories <span className='text-primary'>in Style</span></h1>
              <span>Premium Frames, Custom Designs & Elegant Wall Decor for Every Space.</span>
              <div className="pt-8 flex flex-wrap gap-5">
                <Link href="/shop" className='btn btn-primary'>Shop Now</Link>
                <Link href="/customize" className='btn btn-outline'>Customize</Link>
              </div>
            </div>
            {heroSliderContent.heroSliderData && heroSliderContent.heroSliderData.length > 0 && (
            <div className="w-full lg:w-5/12">
              <Swiper
                modules={[Pagination, Autoplay]}
                // navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                className="mySwiper">
                  {heroSliderContent.heroSliderData.map((item: HeroSlider, index: number) => (
                <SwiperSlide key={index}>
                  <div className="hero-swiper group">
                    <Image
                      src={item.imgSrc}
                      width={item.imgWidth}
                      height={item.imgHeight}
                      alt={item.imgAlt}
                      loading='lazy'
                    /> 
                    <div className="cta-wrapper lg:group-hover:bottom-1/2 lg:group-hover:translate-y-1/2">
                      <a href={item.btnLink} className='btn btn-white rounded-full stretched-link'>{item.btnText}</a>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
              </Swiper>
            </div>
            )}
          </div>
        </div>
        <RectangleFlow />
      </section>
    </>
  )
}

export default Hero;
