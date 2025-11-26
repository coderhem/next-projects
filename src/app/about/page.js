import React from 'react'

const About = () => {
 return (
  <>
   <section className='py-10'>
    <div className="container">
     <h1 className='text-black/90 mb-5 lg:text-5xl'>About <span className='text-primary'>Page</span></h1>
     <p>At nikoNEP, our mission is simple yet powerful: to empower every individual in Nepal with accessible, trusted health care support. We believe in a future where everyone — no matter where they live — has the option to connect with quality health professionals, get expert guidance, and feel confident about their well‐being.</p>
    </div>
   </section>
   {/* End About page */}

   <section className='py-10'>
    <div className="container">
     <h2 className='text-black/90 mb-5'>Who We Are</h2>
     <p>
      nikoNEP was created because we saw a gap: many Nepalis face logistical, geographic or informational barriers when it comes to health care. Our goal is to bridge that gap using technology and human-centric care. We are a team of healthcare professionals, technologists, and wellness advocates committed to:
     </p>
     <ul>
      <li>Offering online consultations with verified doctors, accessible in English, Nepali and Doteli.</li>
      <li>Providing a user-friendly platform where you can search by speciality, condition or practitioner.</li>
      <li>Ensuring secure, confidential and respectful interactions and records.</li>
      <li>Extending support beyond just a one-off visit: guiding you toward better health, wellness and continuity of care.</li>
     </ul>
    </div>
   </section>
   {/* End About page */}
  </>
 )
}

export default About;
