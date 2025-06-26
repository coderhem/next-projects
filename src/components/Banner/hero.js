'use client';
import React from 'react'
import Typewriter from 'typewriter-effect';
import bannerImage from '@/assets/images/banner-image.png';



const socialData = [
  {
    iconClass: "fa fa-facebook",
    anchorLink: "https://facebook.com",
    className: "social-icon",
  },
  {
    iconClass: "fa fa-twitter",
    anchorLink: "https://twitter.com",
    className: "social-icon",
  },
  {
    iconClass: "fa fa-linkedin",
    anchorLink: "https://linkedin.com",
    className: "social-icon",
  },
  {
    iconClass: "fa fa-youtube",
    anchorLink: "https://youtube.com",
    className: "social-icon",
  },
];
const Hero = (

) => {
  return (
    <>

      <div className="relative py-40">
        <div className="container [&_h1]:text-primary">
          <div className="flex justify-between items-center flex-wrap lg:-mx-5">
            <div className="w-full lg:w-8/12 lg:px-5 relative z-[1] before:absolute before:z-[-1] before:bg-primary/10 before:size-96 before:top-0 before:left-0 before:rounded-full before:blur-[100px]">
              <span className='text-primary text-xl'>Hi, I am</span>
              <div className="text-2xl font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "Govind Sharma",
                      "Web Developer",
                      "Wordpress Developer",
                      "React Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <h1 className='mb-5'>Frontend Developer</h1>
              <div className="social-icon-wrapper flex gap-3">
                {socialData.map((data, index) => {
                  return (
                    <a key={index} href={data.anchorLink} className={data.className}>
                      <i className={data.iconClass} aria-hidden="true"></i>
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="w-full lg:w-4/12 lg:px-5 relative before:absolute before:bg-white/15 before:size-80 xl:before:size-96 before:left-0 lg:before:left-1/2 before:bottom-0 lg:before:-translate-x-1/2 before:rounded-full [&_img]:p-5 [&_img]:object-cover [&_img]:object-top before:z-[-1] [&_img]:max-h-96">
              <img
                src={bannerImage.src}
                width={400}
                height={400}
                alt="Hero Banner Image"
                loading='lazy' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
