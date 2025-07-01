import RootLayout from '@/app/layout';
import Hero from '@/components/Banner/hero';
import InfoCard from '@/components/cards/infoCard';
import SectionTitle from '@/components/sectionTitle/sectionTitle';
import React from 'react'
import { Col, Row } from 'react-grid-system';
import jsonData from '@/components/data/data.json';
import aboutFeature from "@/assets/images/banner-image.png"
import ProgressLine from '@/components/progressBar/progressLine';
import OurProjects from '@/components/cards/ourProjects';
import Education from '@/components/cards/education';
import Experience from '@/components/cards/experience';
import CounterCard from '@/components/cards/counterCard';


const Homepage = () => {
  return (
    <div>
      <RootLayout>
        <Hero />
        <section id="ourServices" className="mb-20">
          <div className="container">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <SectionTitle
                titleText="Our"
                orangeText="Services"
                titleDescription="We offer a complete range of digital solutions designed to elevate your brand and drive results. Whether you're a startup, small business, or enterprise, we’ve got you covered."
              />
            </div>
            <Row justify="center">
              {jsonData.serviceData.map((item, index) => {
                return (
                  <Col md={6} lg={4} key={index} className="mb-7">
                    <InfoCard
                      iconClass={item.iconClass}
                      serviceTitle={item.serviceTitle}
                      descText={item.descText}
                    />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
        {/* Services */}

        <section id="aboutMe" className="mb-20">
          <div className="container mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionTitle
                titleText="About"
                orangeText="Me"
                titleDescription="I’m a passionate and detail-oriented developer with a strong focus on building scalable and user-friendly digital experiences. With expertise in React, Next.js, and modern web technologies, I aim to create impactful solutions that blend design with functionality.
"
              />
            </div>
            <div className="flex flex-wrap items-end -mx-3">
              <div className="w-full lg:w-1/2 px-3 relative before:absolute 
                before:left-1/2 before:-translate-x-1/2 before:right-0 before:bottom-0 before:z-[-1] before:bg-white/30 before:h-9/12 before:w-9/12 before:rounded-tr-full before:rounded-tl-full flex justify-center max-lg:mb-10">
                <img src={aboutFeature.src} width={400} height={400} alt="About Us Featured Image" loading="lazy" />
              </div>
              <div className="w-full lg:w-1/2 px-3">
                <p>I’m Govind Sharma, a passionate and detail-oriented frontend developer dedicated to crafting clean, scalable, and responsive web applications. My journey into web development began with a deep curiosity about how digital experiences are built. Over the years, I’ve honed my skills in HTML, CSS, JavaScript, React, and Next.js — tools I now use daily to create modern, high-performance interfaces.
                </p>
                <p>
                  I specialize in turning designs into dynamic, user-centric products. My work combines creativity with logic, always focused on usability, speed, and mobile-first design. Whether I’m building reusable components with React, optimizing pages for SEO and performance, or collaborating with backend developers on API integration, I always aim to write clean, maintainable code that follows best practices.
                </p>
                <div className="lg:max-w-lg">
                  <ProgressLine label='HTML' progress={90} />  {/* HTML */}
                  <ProgressLine label='CSS' progress={85} />  {/* CSS */}
                  <ProgressLine label='Javascript' progress={70} />  {/* Javascript */}
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* About Me */}


        <section id="ourProjects" className="mb-20 w-full">
          <div className="container mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionTitle
                titleText="Our"
                orangeText="Projects"
                titleDescription="We believe in building meaningful, results-driven digital experiences. Here are some of our recent projects that showcase our skills, creativity, and passion for technology."
              />
            </div>
            <Row>
              {jsonData.ourProjectData.map((item, index) => {
                return (
                  <Col md={6} lg={4} className='mb-10 h-auto' key={index}>
                    <OurProjects
                      imgName={item.imgName}
                      imgWidth={item.imgWidth}
                      imgHeight={item.imgHeight}
                      imgAlt={item.imgAlt}
                      ctaText={item.ctaText}
                      ctaLink={item.ctaLink}
                      descText={item.descText}
                    />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
        {/* Our Projects */}

        <section id="education" className='pb-14 lg:pb-20 w-full'>
          <div className="container">
            <div className="mb-14 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-l before:from-transparent before:via-primary before:to-transparent before:z-[1] before:w-full before:h-[2px] pb-2">
              <SectionTitle
                titleText="Education"
              />
            </div>
            <Row>
              {jsonData.educationData.map((item, index) => {
                return (
                  <Col md={6} key={index} className='mb-8'>
                    <Education
                      year={item.year}
                      degreeName={item.degreeName}
                      campusName={item.campusName}
                      achivedGrade={item.achivedGrade}
                    />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
        {/* Education */}

        <section className="mt-20 bg-[url('../assets/images/counter-bg.jpg')] w-full relative z-[1] before:absolute before:inset-0 before:z-[-1] before:bg-black/60">
          <div className="container">
            <Row>
              <Col>
                <CounterCard />                
              </Col>
            </Row>
          </div>
        </section>

        <section id="experience" className='pb-14 lg:pb-20 w-full'>
          <div className="container">
            <div className="mb-14 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-l before:from-transparent before:via-primary before:to-transparent before:z-[1] before:w-full before:h-[2px] pb-2">
              <SectionTitle
                titleText="Experience"
              />
            </div>
            <Row>
              {jsonData.experienceData.map((item, index) => {
                return (
                  <Col md={6} key={index} className='mb-8'>
                    <Experience
                      year={item.year}
                      postName={item.postName}
                      postDescription={item.postDescription}
                      companyName={item.companyName}
                      siteName={item.siteName}
                      siteURL={item.siteURL}
                      targetBlank={item.targetBlank}
                      timeDuration={item.timeDuration}
                    />
                  </Col>
                )
              })}
            </Row>
          </div>
        </section>
        {/* /Experience */}

        <section id='experience' className='pb-14 lg:pb-20'>
          <div className="container">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime vero inventore, mollitia sapiente quod architecto iusto magnam odio accusantium ab enim ipsum exercitationem culpa saepe praesentium aut nihil sed atque?</p>
          </div>
        </section>

      </RootLayout>

    </div>
  )
}

export default Homepage;
