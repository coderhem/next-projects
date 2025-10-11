'use client';
import Link from 'next/link';
import React from 'react'
import headshotThumbnail from '../../assets/images/doctor-img.png'
import CardAcademic from '@/components/Cards/cardAcademic/CardAcademic';
import TickList from '@/components/ListStyle/tickList';
import { Col, Row } from 'react-grid-system';
import CardSpecializations from '@/components/Cards/cardSpecializations/cardSpecializations';
import data from '../../components/Data/data.json';

const Doctors = () => {
 return (
  <>
   <section className="bg-sky-blue-100/20 py-12">
    <div className="container">
     <ul className='flex gap-5'>
      <li>
       <Link href="/" className='text-black font-bold hover:text-black/50 transition-all duration-300'>Home</Link>
      </li>
      <li>
       <i className="fa fa-arrow-right text-primary" aria-hidden="true"></i>
      </li>
      <li>
       <Link href="#" className='text-primary font-bold hover:text-black/50 transition-all duration-300'>Doctor Profile</Link>
      </li>
     </ul>
    </div>
   </section>
   {/* Hero Ends */}

   <section className="bg-yellow-150/5 py-16">
    <div className="container">
     <div className="flex max-lg:flex-wrap justify-between items-center gap-6">
      <div className="w-full lg:w-8/12 bg-white shadow-md p-5 rounded-lg">
       <div className="flex justify-between items-center max-lg:flex-wrap">
        <figure className='w-full lg:w-1/2 [&_img]:w-full'>
         <img src={headshotThumbnail.src} width={300} height={400} alt="Doctor Thumbnail" loading='lazy' />
        </figure>
        <div className="w-full lg:w-1/2">
         <h2 className='h5 text-black'>Dr. Ramesh Singh</h2>
         <span className='block'>(MBBS, MD)</span>
         <span>Gynecologist</span>
         <strong className='block mt-3 bg-primary/40 py-2 px-3 text-black rounded-lg'>21 years of experience</strong>
         <div className="bg-primary/15 mt-5 mb-6 p-4 rounded text-sm text-black [&_p]:!mb-2">
          <p>NMC: 109383</p>
          <p>Current Working: </p>
          <ul className='list-disc px-4'>
           <li>NIMS Hospital</li>
           <li>HAMS Hospital</li>
           <li>BIR Hospital</li>
          </ul>
         </div>
         <div className="bg-primary/10 p-4 rounded-br-2xl rounded-bl-2xl flex justify-between gap-2 lg:gap-3">
          <a href="#" className='btn btn-secondary rounded-full text-xs h-10 flex-1'>Book Appointment</a>
          <a href="#" className='size-9 bg-secondary flex justify-center items-center rounded-full text-white border border-secondary hover:bg-transparent hover:text-secondary transition-all duration-300'>
           <i className="fa fa-share-alt" aria-hidden="true"></i>
          </a>
         </div>
        </div>
       </div>
       <h3 className='h5 mb-2 text-black'>Professional Statement</h3>
       <p>Doctor with Masters in Dermatology, having more than 6 years of clinical and research experience. Committed to provide expert solutions for various skin problems and raise awareness among general public regarding the same. Specialises in treating acne, pigmentation, melasma, acanthosis, hairfall, nail problems, eczema, autoimmune conditions and various other dermatological disorders.</p>
      </div>
      {/* Doctor Details */}

      <div className="w-full lg:w-4/12 border border-primary/20 p-5">
       <form action="">
        <div className="mb-4">
         <h4 className='h3 text-black'>Have Problem? <span className='text-primary'>Ask Me</span></h4>
        </div>
        <div className="form-group !w-full">
         <input type="text" placeholder='Full Name' name="full-name" className='form-control text-black w-full' />
        </div>
        <div className="form-group !w-full">
         <input type="text" placeholder='Phone' name="" id="" className='form-control' />
        </div>
        <div className="form-group !w-full">
         <select name="select" id="" className='form-control w-full'>
          <option value="Cardio">Cardio</option>
          <option value="Cardio">Cardio</option>
          <option value="Cardio">Cardio</option>
         </select>
        </div>
        <div className="form-group !w-full h-32">
         <textarea name="message" placeholder='Message...' className='form-control !h-full'></textarea>
        </div>
        <div className="form-group !w-full">
         <button className='btn btn-green w-full'>
          Submit
         </button>
        </div>
       </form>
      </div>
      {/* Form */}
     </div>
    </div>

    <div className="container pt-10 lg:pt-16">
     <Row>
      {academicDataList.map((item, index) => {
       return (
        <Col lg={4} key={index} className='mb-6'>
         <CardAcademic >
          <div className="bg-primary size-11 rounded-full flex justify-center items-center text-white text-2xl mb-4">
           <i className={item.titleIconClass} aria-hidden="true"></i>
          </div>
          <h2 className='h5 text-black'>{item.academicTitle}</h2>
          <TickList
           iconClass={item.iconClass}
           listContent={item.listContent}
          />
         </CardAcademic>
        </Col>
       )
      })}

     </Row>
    </div>

   </section>
   {/* Doctor Details Ends */}

   <section className='pt-9 pb-10 lg:pb-14 bg-sky-blue-100/20'>
    <div className="container">
     <div className="mb-8">
      <h2 className='h5 text-black'>Specializations</h2>
     </div>
     <Row>
      <Col lg={8}>
       <Row>
        {data.specializationsData[0].specializations.map((item, index) => (
         <Col sm={6} md={4} lg={3} key={index} className='mb-6'>
          <CardSpecializations>
           <ul>
            <li className="h6 text-lg">{item}</li>
           </ul>
          </CardSpecializations>
         </Col>
        ))}
       </Row>
      </Col>
      <Col lg={4}>
       <div className="bg-white shadow-lg px-5 pt-5 pb-10 text-center">
        <h2 className='h5 text-black mb-4'>Services <span className='text-primary'>offered</span></h2>
        <ul className='flex flex-wrap justify-center items-center gap-5'>
         <li className='flex items-center gap-1'>
          <i className='fa fa-video border border-primary hover:bg-transparent text-white bg-primary size-7 rounded-full !flex justify-center items-center'></i>
          <span>Video</span>
         </li>
         <li className='flex items-center gap-1'>
          <i className='fa fa-phone border border-primary hover:bg-transparent text-white bg-primary size-7 rounded-full !flex justify-center items-center'></i>
          <span>Call</span>
         </li>
         <li className='flex items-center gap-1'>
          <i className='fa fa-commenting border border-primary hover:bg-transparent text-white bg-primary size-7 rounded-full !flex justify-center items-center'></i>
          <span>Live Chat</span>
         </li>
         <li className='flex items-center gap-1'>
          <i className='fa fa-comments border border-primary hover:bg-transparent text-white bg-primary size-7 rounded-full !flex justify-center items-center'></i>
          <span>Messaging</span>
         </li>
        </ul>
        <div className="pt-12">
         <span className='block text-xl font-bold text-black pl-2'>Next available Dates :</span>
         <div className="flex justify-center gap-2 pt-2 pb-5">
          <i className="fa fa-calendar text-primary text-xl"></i>
          <span>01:00 PM-01:15 PM on 2025-05-25</span>
         </div>
          <a href="#" className='btn btn-secondary'>View All Dates</a>
        </div>
       </div>
      </Col>
     </Row>
    </div>
   </section>

  </>
 )
}

export default Doctors;

const academicDataList = [
 {
  academicTitle: "Language",
  titleIconClass: "fa fa-language",
  iconClass: "fa fa-check",
  listContent: ["English", "Hindi", "Nepali"]
 },
 {
  titleIconClass: "fa fa-graduation-cap",
  academicTitle: "Education",
  iconClass: "fa fa-check",
  listContent: ["Maths", "Science", "Computer"]
 },
 {
  titleIconClass: "fa fa-headphones",
  academicTitle: "I can help you with",
  iconClass: "fa fa-check",
  listContent: ["History", "Geography", "Civics"]
 }
];