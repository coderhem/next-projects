'use client'
import React from 'react'
import { Col, Row } from 'react-grid-system';
import SectionTitle from '../topSectionTitle/sectionTitle';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <SectionTitle
            titleText="Contact Me"
            titleDescription="I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Whether you have a clear vision or just a spark, I’m eager to help bring it to life. Let’s connect and create something meaningful together.
"
          />
          <div className="container pt-20 text-center mb-10">
            <Row justify='between'>
              <Col sm={6} md={4} lg={3} className='mb-14'>
                <div className="relative">
                  <div className="flex justify-center items-center bg-primary/20 size-24 rounded-full mb-5 mx-auto">
                    <i className="fa fa-address-card-o !text-3xl" aria-hidden="true"></i>
                  </div>
                  <span className='text-2xl font-bold block pb-5'>Address</span>
                  <a href="#" className='text-lg stretched-link underline hover:no-underline'>Thali Kathmandu</a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3} className='mb-14'>
                <div className="relative">
                  <div className="flex justify-center items-center bg-primary/20 size-24 rounded-full mb-5 mx-auto">
                    <i className="fa fa-phone !text-3xl" aria-hidden="true"></i>
                  </div>
                  <span className='text-2xl font-bold block pb-5'>Phone Number</span>
                  <a href="tel:9851042367 " className='text-lg stretched-link underline hover:no-underline'>9851042367</a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3} className='mb-14'>
                <div className="relative">
                  <div className="flex justify-center items-center bg-primary/20 size-24 rounded-full mb-5 mx-auto">
                    <i className="fa fa-envelope !text-3xl" aria-hidden="true"></i>
                  </div>
                  <span className='text-2xl font-bold block pb-5'>Email Address</span>
                  <a href="mailto:gov.dhungel@gmail.com" className='text-lg stretched-link underline hover:no-underline'>gov.dhungel@gmail.com</a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3} className='mb-14'>
                <div className="relative">
                  <div className="flex justify-center items-center bg-primary/20 size-24 rounded-full mb-5 mx-auto">
                    <i className="fa fa-globe !text-3xl" aria-hidden="true"></i>
                  </div>
                  <span className='text-2xl font-bold block pb-5'>Download</span>
                  <a href="#" className='text-lg stretched-link underline hover:no-underline'>Resume Link</a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="bg-white/20 text-center py-5 [&_p]:mb-0">
          <p>Copyright © 2025 All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
