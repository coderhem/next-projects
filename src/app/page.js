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
import processData from "../components/Cards/cardProcess/cardProcessData.json"
import CardDoctor from "@/components/Cards/cardDoctor/cardDoctor";
import BlockTitle from "@/components/BlockTitle/blockTitle";
import doctorData from "../components/Data/data.json";
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

      <section className="bg-[var(--secondary)] py-12 sm:py-20 md:py-24 lg:py-30">
        <div className="container">
          <Row justify="center">
            {processData.processData.map((item, index) => {
              return (
                <Col md={6} lg={3} key={index} className="max-lg:mb-10 md:not-last:border-r-1 border-white/10 md:not-last:border-b-0 not-last:border-b md:even:border-0 lg:not-last:even:border-r max-md:pb-5">
                  <CardProcess
                    cardIcon={item.cardIcon}
                    cardTitle={item.cardTitle}
                    cardDescription={item.cardDescription}
                  />
                </Col>
              )
            })}
          </Row>
        </div>
      </section>
      {/* Card Process */}
      <section className="bg-[var(--green)]/5 py-32">
        <div className="container">
          <BlockTitle
            titleText="Recently Added"
            greenColor="Doctor"
            descriptionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure necessitatibus magni modi aliquam similique numquam, veniam explicabo consequatur ipsum. Maiores excepturi architecto ad natus, unde numquam inventore at voluptatibus."
            className="max-w-3xl mx-auto mb-10"
          />
          <Row>
            {doctorData.doctorCardData.map((item, index) => {
              return (
                <Col lg={6} key={index}>
                  <CardDoctor
                    imgSrc={item.imgSrc}
                    imgWidth={item.imgWidth}
                    imgHeight={item.imgHeight}
                    imgAlt={item.imgAlt}
                    doctorName={item.doctorName}
                    doctorPost={item.doctorPost}
                    speciality={item.speciality}
                    experience={item.experience}
                    iconClass={item.iconClass}
                    ctaLink={item.ctaLink}
                    strongText={item.strongText}
                    listText={item.listText}
                    btnClass={item.btnClass}
                    btnOutline={item.btnOutline}
                    outlineCtaText={item.outlineCtaText}
                    btnOutlineLink={item.btnOutlineLink}
                    btnSecondary={item.btnSecondary}
                    secondaryCtaText={item.secondaryCtaText}
                    btnSecondaryLink={item.btnSecondaryLink}
                  />
                </Col>
              )
            })}
          </Row>
        </div>
      </section>
    </>
  );
}
