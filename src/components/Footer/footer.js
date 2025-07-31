'use client';
import React from 'react';
import footerLogo from "../../assets/images/header-logo.png";
import { Col, Row } from 'react-grid-system';

const Footer = () => {
 const socailIconData = [
  {
   iconClass: "fa fa-facebook",
   socialLink: "/facebook.com",
   anchorClass: "bg-[var(--blue-100)] border-[var(--blue-100)] focus:ring-[var(--blue-100)]"
  },
  {
   iconClass: "fa fa-youtube",
   socialLink: "/youtube.com",
   anchorClass: "bg-[var(--red)] border-[var(--red)] focus:ring-[var(--red)]"
  },
  {
   iconClass: "fa fa-instagram",
   socialLink: "/instagram.com",
   anchorClass: "bg-[var(--violet)] border-[var(--violet)] focus:ring-[var(--violet)]"
  },
  {
   iconClass: "fa fa-linkedin",
   socialLink: "/linkedin.com",
   anchorClass: "bg-[var(--blue)] border-[var(--blue)] focus:ring-[var(--blue)]"
  },
  {
   iconClass: "fa fa-twitter",
   socialLink: "/twitter.com",
   anchorClass: "bg-[var(--sky-blue)] border-[var(--sky-blue)] focus:ring-[var(--sky-blue)]"
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
     ctaLink: "/"
    },
    {
     ctaText: "My Account",
     ctaLink: "/about"
    },
    {
     ctaText: "Login",
     ctaLink: "/contact"
    },
    {
     ctaText: "Signup",
     ctaLink: "/faq"
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
   <footer className='mt-18 md:mt-20 lg:mt-28 pt-7 bg-[var(--secondary)] text-white'>
    <div className="container">
     <div className="border-b border-white/30 pb-8 lg:pb-4 mb-16">
      <Row justify='between' align='center'>
       <Col lg={5}>
        <a href="#">
         <figure className="mb-2">
          <img src={footerLogo.src} width="178" height="52" alt="" loading='lazy' />
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
               className="hover:text-[var(--primary)] hover:!underline"
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

    <div className="bg-[var(--secondary-100)] py-8 mt-16 max-md:text-center">
     <div className="container">
      <Row justify='between'>
       <Col md={6}>
        <p className='!mb-0'>© 2025 HealthFirst Online Clinic. All rights reserved.</p>
       </Col>
       <Col md={6}>
        <div className="flex justify-center md:justify-end items-center gap-3 max-md:mt-8">
         <a href="#" className='text-[var(--red)] hover:text-[var(--red)]/60 focus:text-[var(--red)]/60 transition-all duration-300 !underline hover:!no-underline focus:!no-underline'>Privacy Policy</a> <span>|</span> <a href="#" className='text-[var(--red)] hover:text-[var(--red)]/60 focus:text-[var(--red)]/60 transition-all duration-300 !underline hover:!no-underline focus:!no-underline'>Terms & Conditions</a>
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
