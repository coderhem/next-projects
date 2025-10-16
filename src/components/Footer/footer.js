'use client';
import React from 'react';
import footerLogo from "../../assets/images/footer-logo.png";
import { Col, Row } from 'react-grid-system';
import Image from 'next/image';

const Footer = () => {
 const socailIconData = [
  {
   iconClass: "fa fa-facebook",
   socialLink: "/facebook.com",
   anchorClass: "bg-blue-100 border-blue-100 focus:ring-blue-100"
  },
  {
   iconClass: "fa fa-youtube",
   socialLink: "/youtube.com",
   anchorClass: "bg-red border-red focus:ring-red"
  },
  {
   iconClass: "fa fa-instagram",
   socialLink: "/instagram.com",
   anchorClass: "bg-violet border-violet focus:ring-violet"
  },
  {
   iconClass: "fa fa-linkedin",
   socialLink: "/linkedin.com",
   anchorClass: "bg-blue border-blue focus:ring-blue"
  },
  {
   iconClass: "fa fa-twitter",
   socialLink: "/twitter.com",
   anchorClass: "bg-sky-blue border-sky-blue focus:ring-sky-blue"
  }
 ]
 const footerLink = [
  {
   listTitle: "Company",
   linkList: [
    {
     ctaText: "Home",
     ctaLink: "/"
    },
    {
     ctaText: "About Us",
     ctaLink: "/about"
    },
    {
     ctaText: "Contact Us",
     ctaLink: "/contact"
    },
    {
     ctaText: "Frequently Asked Questions",
     ctaLink: "/faq"
    }
   ]
  },
  {
   listTitle: "Our Services",
   linkList: [
    {
     ctaText: "Specialist Consultations",
     ctaLink: "/"
    },
    {
     ctaText: "Mental Health Services",
     ctaLink: "/about"
    },
    {
     ctaText: "Diagnostics & Lab Tests",
     ctaLink: "/contact"
    },
    {
     ctaText: "Online Services",
     ctaLink: "/faq"
    },
    {
     ctaText: "Prescription & Pharmacy",
     ctaLink: "/faq"
    }
   ]
  },
  {
   listTitle: "Account",
   linkList: [
    {
     ctaText: "Book Appointment",
     ctaLink: "/membership"
    },
    {
     ctaText: "My Account",
     ctaLink: "/login"
    }
   ]
  },
  {
   listTitle: "Subscribe",
   linkList: [
    {
     ctaText: "Subscribe",
     ctaLink: "/"
    }

   ]
  }
 ]
 return (
  <>
   <footer className='mt-18 md:mt-20 lg:mt-28 pt-7 bg-secondary text-white'>
    <div className="container">
     <div className="border-b border-white/30 pb-8 lg:pb-4 mb-16">
      <Row justify='between' align='center'>
       <Col lg={5}>
        <a href="#">
         <figure className="mb-2">
          <Image
           src={footerLogo} 
           width="178" 
           height="52" 
           alt="Footer Logo" 
           loading='lazy' />
         </figure>
        </a>
        <p>A trusted clinic offering quality healthcare services, expert consultations, and patient-focused care for individuals and families.</p>
       </Col>
       <Col lg={4}>
        <ul className='mt-4 flex items-center flex-wrap gap-5'>
         {socailIconData.map((item, index) => {
          return (
           <li key={index}>
            <a
             href={item.socialLink}
             className={`${item.anchorClass} social-icons`}>
             <i className={`${item.iconClass} text-2xl before:font-[FontAwesome]`} aria-hidden="true"></i>
            </a>
           </li>
          )
         })}
        </ul>
       </Col>
      </Row>
     </div>
     <Row>
      {footerLink.map((item, index) => {
       return (
        <Col sm={6} md={4} lg={3} key={index} className='mb-10'>
         <div className="[&_h2]:relative ">
          <h2 className='h4 pb-2 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-white before:h-1 before:w-8/12 inline-block'>{item.listTitle}</h2>
          <ul className="mt-5 text-lg font-bold [&_li]:mb-4">
           {item.linkList.map((linkItem, linkIndex) => {
            return (
             <li key={linkIndex}>
              <a
               href={linkItem.ctaLink}
               className="hover:text-primary hover:!underline"
              >
               {linkItem.ctaText}
              </a>
             </li>
            );
           })}
          </ul>
         </div>
        </Col>
       )
      })}
     </Row>
    </div>

    <div className="bg-secondary-100 py-8 mt-16 max-md:text-center">
     <div className="container">
      <Row justify='between'>
       <Col md={6}>
        <p className='!mb-0'>© 2025 HealthFirst Online Clinic. All rights reserved.</p>
       </Col>
       <Col md={6}>
        <div className="flex justify-center md:justify-end items-center gap-3 max-md:mt-8">
         <a href="#" className='text-red hover:text-red/60 focus:text-red/60 transition-all duration-300 !underline hover:!no-underline focus:!no-underline'>Privacy Policy</a> <span>|</span> <a href="#" className='text-red hover:text-red/60 focus:text-red/60 transition-all duration-300 !underline hover:!no-underline focus:!no-underline'>Terms & Conditions</a>
        </div>
       </Col>
      </Row>
     </div>
    </div>
   </footer >

  </>
 )
}

export default Footer;
