'use client';
import Hero from "@/components/Hero/hero";
import Testimonial from "@/components/Testimonial/testimonial";
import testimonialSlider from "../components/Data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CardInfo from "@/components/Cards/cardInfo/cardInfo";
import infoCardData from "../components/Data/data.json";
import { Col, Row } from "react-grid-system";
import CardProcess from "@/components/Cards/cardProcess/cardProcess";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{ delay: 12000, disableOnInteraction: false }}
          loop={true}
          className="slider testimonial"
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
      </div>
      {/* Testimonial */}

      <section className="bg-[url('../assets/images/card-bg.png')] bg-cover bg-no-repeat bg-center py-10 md:py-14 lg:py-20">
        <div className="container">
          <Row>
            {infoCardData.cardInfoData.map((item, index) => {
              return (
                <Col md={6} lg={4} xl={3} key={index} className="mb-7">
                  <CardInfo
                    cardBgClass={item.cardBgClass}
                    cardIcon={item.cardIcon}
                    cardTitle={item.cardTitle}
                    cardDescription={item.cardDescription}
                    btnClass={item.btnClass}
                    ctaText={item.ctaText}
                    ctaLink={item.ctaLink}
                  />
                </Col>
              )
            })}
          </Row>
        </div>
      </section>
      {/* Card Information */}

      <section>
        <div className="container bg-[var(--secondary)] py-20 md:py-24 lg:py-30 rounded-md">
          <CardProcess />
        </div>
      </section>
      {/* Card Process */}
    </>
  );
}
