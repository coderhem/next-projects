'use client';
import Hero from "@/components/Hero/hero";
import Testimonial from "@/components/Testimonial/testimonial";
import testimonialSlider from "../components/Data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardInfo from "@/components/Cards/cardInfo/cardInfo";
import infoCardData from "../components/Data/data.json";
import { Col, Row } from "react-grid-system";
import CardProcess from "@/components/Cards/cardProcess/cardProcess";
import processData from "../components/Cards/cardProcess/cardProcessData.json"
import CardDoctor from "@/components/Cards/cardDoctor/cardDoctor";
import BlockTitle from "@/components/BlockTitle/blockTitle";
import doctorData from "../components/Data/data.json";
import CardClinic from "@/components/Cards/cardClinics/CardClinics";
import clinicsData from "../components/Data/data.json";
import CardAccordion from "@/components/Accordion/accordion";
import accordionData from "../components/Data/data.json";
import contactUsImg from "../assets/images/contact-us-image.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CtaBtn from "@/components/CtaBtn/ctaBtn";
import ContactForm from "@/components/Form/form";
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

      <section className="bg-[var(--green)]/5 pb-20 pt-32">
        <div className="container">
          <BlockTitle
            titleText="Recently Added"
            greenColor="Doctor"
            descriptionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure necessitatibus magni modi aliquam similique numquam, veniam explicabo consequatur ipsum. Maiores excepturi architecto ad natus, unde numquam inventore at voluptatibus."
            className="max-w-3xl mx-auto mb-10"
          />
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 12000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
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
            {doctorData.doctorCardData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardDoctor
                    id={item.id}
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
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      {/* Card Doctors */}

      <section className="pt-10 pb-10">
        <div className="container">
          <div className="flex flex-wrap justify-between gap-5 items-center mb-10">
            <BlockTitle
              titleText="Recently Added"
              greenColor="Clinics"
              className="!mx-0 text-start [&_h2]:!mb-0"
            />
            <div className="flex gap-6 justify-center !static">
              <a href="#" className="custom-next" >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a href="#" className="custom-prev">
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 120000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev'
            }}
            className="slider clinic-slider"
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
            {clinicsData.clinicCardData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardClinic
                    clinicName={item.clinicName}
                    heilightText={item.heilightText}
                    clinicDescription={item.clinicDescription}
                    iconClass={item.iconClass}
                    blueText={item.blueText}
                    time={item.time}
                    btnOutlineLink={item.btnOutlineLink}
                    outlineCtaText={item.outlineCtaText}
                    btnOutline={item.btnOutline}
                    btnSecondary={item.btnSecondary}
                    btnSecondaryLink={item.btnSecondaryLink}
                    secondaryCtaText={item.secondaryCtaText}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section >
      {/* Card Clinics */}

      <section className="bg-[var(--sky-blue)]/10 pt-20 pb-4">
        <div className="container">
          <BlockTitle
            titleText="Frequently Asked"
            greenColor="Questions"
            descriptionText="Find quick answers to common questions about our clinic, services, appointments, and more."
            className="mb-10"
          />
          {accordionData.cardAccordionData.map((item, index) => {
            return (
              <CardAccordion key={index}
                accordionTitle={item.accordionTitle}
                accordionDescription={item.accordionDescription}
                iconClass={item.iconClass}
              />
            )
          })}
        </div>
      </section>
      {/* Card Accoidion */}

      <section className="bg-[var(--blue)]/10 py-8">
        <div className="container">
          <Row>
            <Col lg={6}>
              <div className="text-black max-lg:mb-10">
                <h2>Connect Us</h2>
                <p>Fill out our quick and confidential form, and our compassionate team will contact you promptly. Your privacy is our priority, and all information you share with us will remain strictly confidential.</p>

                <CtaBtn
                  ctaText="9865900739"
                  ctaLink="tel:9865900739"
                  iconClass="fa fa-phone"
                  ctaClass="mt-8 mb-5"
                />
                <CtaBtn
                  ctaText="info@gmail.com"
                  ctaLink="mailto:info@gmail.com"
                  iconClass="fa fa-envelope"
                  ctaClass="mb-12"
                />
                <figure>
                  <img src={contactUsImg.src} width="400" height="400" alt="Contact Us Featured Image" loading="lazy" />
                </figure>
              </div>
            </Col>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
