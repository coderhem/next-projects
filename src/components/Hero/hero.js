'use client';
import React from 'react'
import { Col, Row } from 'react-grid-system';
import CardHero from '../Cards/CardHero/cardHero';
import sliderData from '../Data/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Hero = () => {
 return (
  <>
   <section className="bg-[url('../assets/images/hero-bg.webp')] py-8 bg-cover bg-top">
    <div className="container">
     <Row>
      <Col lg={7} className='mb-10'>
       <div className="[&_h1]:text-black">
        <span className='text-[var(--primary)] font-bold uppercase'>Entrust your health our doctors</span>
        <h1>The Relentless Pursuit <span className='text-[var(--primary)]'>of Better Care</span></h1>
        <ul className="pt-5 [&_li]:relative [&_li]:pl-6 [&_li]:not-last:mb-3">
         {listData.map((item, index) => {
          return (
           <li key={index}>
            {item.iconClass &&
             <i className={`${item.iconClass} absolute left-0 top-1 text-[var(--primary)]`}></i>
            }
            {item.listContent}
           </li>
          )
         })}
        </ul >
        <div className="pt-9">
         <a href="#" className='btn btn-secondary'>Who we are</a>
        </div>
       </div>
      </Col>
      <Col lg={5}>
       <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="slider">
        {sliderData.cardHeroData.map((item, index) => {
         return (
          <SwiperSlide className='px-7' key={index}>
           <CardHero
            imgSrc={item.imgSrc}
            imgWidth={item.imgWidth}
            imHeight={item.imHeight}
            imgAlt={item.imgAlt}
            fullName={item.fullName}
            postName={item.postName}
            ctaText={item.ctaText}
            ctaLink={item.ctaLink}
           />
          </SwiperSlide>
         )
        })}
       </Swiper>
      </Col>
     </Row>
    </div>
   </section>
  </>
 )
}

export default Hero;

const listData = [
 {
  listContent: "Nearly 600000 unique patients per year",
  iconClass: "fa fa-check-circle"
 },
 {
  listContent: "80000 Emergency Department visits",
  iconClass: "fa fa-check-circle"
 },
 {
  listContent: "2.5 million outpatient clinic visits",
  iconClass: "fa fa-check-circle"
 },
 {
  listContent: "40000 hospital stays",
  iconClass: "fa fa-check-circle"
 }
]