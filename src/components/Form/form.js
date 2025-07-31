import React, { useEffect, useRef, useState } from 'react'

const ContactForm = () => {
 const [input, setInput] = useState('');
 const [error, setIsError] = useState(false);
 const inputRef = useRef(null);

 useEffect(() => {
  if (input.trim() === '') {
   setIsError(true);
   inputRef.current?.classList.add('error');
  } else {
   setIsError(false);
   inputRef.current?.classList.remove('error');
  }
 }, [input]);

 return (
  <>
   <div className="bg-white shadow-[0px_0px_15px_0_rgba(0,191,165,0.2)] pt-9 pb-5 px-8">
    <div className="mb-6 text-black">
     <h2>Still <span className='text-[var(--primary)]'>Have Questions?</span></h2>
    </div>
    <div className="">
     <form action="" className='form'>
      <div className="form-group !w-full" ref={inputRef}>
       <input type="text" required className='form-control' name='fullName' placeholder='Full Name' />
       <p className='error-message'>This field is required*</p>
      </div>
      <div className="form-group">
       <input type="email" className='form-control' name='fullName' placeholder='Email' />
      </div>
      <div className="form-group">
       <input type="text" className='form-control' name='fullName' placeholder='Phone' />
      </div>
      <div className="form-group !w-full">
       <select name="" id="" className='form-control'>
        <option value="">Services</option>
        <option value="">Services</option>
        <option value="">Services</option>
       </select>
      </div>
      <div className="form-group">
       <select name="" id="" className='form-control'>
        <option value="">Doctor</option>
        <option value="">Services</option>
        <option value="">Services</option>
       </select>
      </div>
      <div className="form-group">
       <select name="" id="" className='form-control'>
        <option value="">Clinic</option>
        <option value="">Services</option>
        <option value="">Services</option>
       </select>
      </div>
      <div className="form-group !w-full">
       <textarea name="" id="" className='form-control !h-20'></textarea>
      </div>
      <div className="w-full">
       <button className='bg-[var(--primary)] border-[var(--primary)] btn btn-secondary !w-full'>
        Submit Now
       </button>
      </div>
     </form>
    </div>
   </div>
  </>
 )
}

export default ContactForm;
