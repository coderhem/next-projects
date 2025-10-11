import React from 'react'

const Membership = () => {
 return (
  <>

   <section className='py-10 bg-primary/5'>
    <div className="container">
     <div className="text-center max-w-3xl mx-auto">
      <h2 className='h4 text-black mb-2'><span className='text-primary'>Get</span> Membership</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum quas ipsam libero eaque voluptates mollitia quo, consequatur sunt enim voluptas, iste magni. Obcaecati culpa cum exercitationem officiis ad fuga?</p>
     </div>
     <div className="overflow-hidden membership-form pt-10 max-w-3xl shadow-lg mx-auto p-10 rounded-lg relative before:absolute before:size-20 before:bg-primary before:rounded-full  before:-top-10 before:-left-10 before:blur-2xl after:absolute after:size-20 after:bg-primary after:rounded-full after:bottom-0 after:right-0 after:blur-3xl after:z-[-1] border border-primary/20">
      <form action="" className='flex flex-wrap'>
       <div className="form-group !w-full">
        <input type="text" name="full-name" placeholder='Full Name' id="fullName" className='form-control' />
       </div>
       <div className="form-group">
        <input type="text" name="phone" placeholder='Phone Number' id="number" className='form-control' />
       </div>
       <div className="form-group">
        <input type="email" name="email" placeholder='Email Address' id="email" className='form-control' />
       </div>
       <div className="form-group">
        <select name="" id="" className='form-control'>
         <option value="Gender">Gender</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Others">Others</option>
        </select>
       </div>
       <div className="form-group">
        <select name="" id="" className='form-control'>
         <option value="O+ve">Blood Group</option>
         <option value="O+ve">O<sup>+ve</sup></option>
         <option value="O+ve">A<sup>+ve</sup></option>
         <option value="O+ve">B<sup>+ve</sup></option>
         <option value="O+ve">AB<sup>+ve</sup></option>
         <option value="O+ve">A<sup>-ve</sup></option>
         <option value="O+ve">AB<sup>-ve</sup></option>
         <option value="O+ve">O<sup>-ve</sup></option>

        </select>
       </div>
       <div className="form-group !w-full">
        <input type="text" name="address" placeholder='Address' id="addressDetail" className='form-control' />
       </div>
       <div className="px-3 w-full">
        <button className='btn btn-green px-3 w-full' type='submit'>Submit</button>
       </div>
      </form>
         <div className="pt-4 text-center">
         <p>If you have an membership <a href='/login' className='text-primary !underline hover:!no-underline'>Login Here</a></p>
        </div>
     </div>
    </div>
   </section>

  </>
 )
}

export default Membership;
