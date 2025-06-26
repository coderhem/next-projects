'use client';
import Hero from "@/components/Banner/hero";
import InfoCard from "@/components/cards/infoCard";
import Header from "@/components/Header/header";
import { Col, Row } from "react-grid-system";
import jsonData from '@/components/data/data.json';
import aboutFeature from "@/assets/images/banner-image.png"
import SectionTitle from "@/components/sectionTitle/sectionTitle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <main className="w-full h-full">
        <Header />
        {/* /Header */}

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
            <div className="">
              <div className="flex items-end -mx-3">
                <div className="w-full lg:w-1/2 px-3 relative before:absolute 
                before:left-1/2 before:-translate-x-1/2 before:right-0 before:bottom-0 before:z-[-1] before:bg-white/30 before:h-9/12 before:w-9/12 before:rounded-tr-full before:rounded-tl-full flex justify-center">
                  <img src={aboutFeature.src} width={400} height={400} alt="About Us Featured Image" loading="lazy" />
                </div>
                <div className="w-full lg:w-1/2 px-3">
                  <p>I’m Govind Sharma, a passionate and detail-oriented frontend developer dedicated to crafting clean, scalable, and responsive web applications. My journey into web development began with a deep curiosity about how digital experiences are built. Over the years, I’ve honed my skills in HTML, CSS, JavaScript, React, and Next.js — tools I now use daily to create modern, high-performance interfaces.
                  </p>
                  <p>
                    I specialize in turning designs into dynamic, user-centric products. My work combines creativity with logic, always focused on usability, speed, and mobile-first design. Whether I’m building reusable components with React, optimizing pages for SEO and performance, or collaborating with backend developers on API integration, I always aim to write clean, maintainable code that follows best practices.
                  </p>
                  <p>
                    Tools like Tailwind CSS, Git, and Figma are part of my everyday workflow. I’m comfortable working in Agile teams, using GitHub for version control and tools like Jira or Trello to manage tasks. I'm constantly learning, staying up to date with new frameworks, design patterns, and web standards to deliver solutions that are not just functional but elegant.

                    I thrive on solving problems — whether it's debugging a tricky layout issue, improving accessibility, or fine-tuning performance. For me, frontend development is more than just a job — it’s a craft that blends technology and design in exciting ways. I value teamwork, open communication, and clean documentation, and I believe that great products are built when developers think from the user’s perspective.
                  </p>
                  <div className="pt-5">
                    <a className="btn btn-primary">Download CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex items-center">
              <div className="w-1/4 text-center">
                <div className="bg-transparent border-8 border-primary inline-flex rounded-full size-20 justify-center items-center [&_i]:!text-3xl">
                  <i className="fa fa-html5"></i>
                </div>
                <div className="text-center">
                  <span className="text-primary font-semibold block">100%</span>
                  <small className="text-white/70">HTML</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Me */}

      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="container">
          <h1>This is Footer</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nihil, accusantium debitis odit fugiat dicta officiis iste, alias quibusdam sit maiores animi vitae molestiae suscipit aliquam! Exercitationem molestiae fugiat ducimus?</p>
        </div>
      </footer>
    </div >
  );
}
