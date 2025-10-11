import React from 'react'

const Login = () => {
 return (
  <>

   <section className='py-10 lg:py-14'>
    <div className="container">
     <div className="max-w-lg mx-auto">
      <div className="shadow px-3 py-5 overflow-hidden relative before:absolute before:size-20 before:bg-primary before:rounded-full  before:-top-10 before:-left-10 before:blur-2xl after:absolute after:size-20 after:bg-primary after:rounded-full after:-top-0 after:right-0 after:blur-3xl after:z-[-1]">
       <h2 className="h5 text-primary mb-5 pl-3 text-center">Login</h2>
       <form action="/login">
        <div className="form-group !w-full">
         <label htmlFor="username" className='text-black/70 mb-2 block text-sm font-medium'>Username</label>
         <input type="text" name="username" id="username" className='form-control text-base' />
         <span className='text-xs text-red hidden'>User Not Found</span>
        </div>
        <div className="form-group !w-full">
         <label htmlFor="username" className='text-black/70 mb-2 block text-sm font-medium'>Password</label>
         <input type="password" name="password" id="password" className='form-control text-base' />
         <span className='text-xs text-red hidden'>Invalid Password</span>
        </div>
        <div className="px-3">
         <button type='submit' className='w-full btn btn-green'>Login</button>
        </div>
        <div className="pt-4 text-center">
         <p>If you don't have an membership <a href='/membership' className='text-primary !underline hover:!no-underline'>Get Here</a></p>
        </div>
       </form>
      </div>
     </div>
    </div>
   </section>

  </>
 )
}

export default Login;
