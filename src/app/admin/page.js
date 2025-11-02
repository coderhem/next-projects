import Link from 'next/link';
import React from 'react'

const Admin = () => {
 return (
  <>
   <div className="">
    <div className="-mb-18 md:-mb-20 lg:-mb-28">
     <div className="flex h-screen">
      <aside className="w-64 h-screen bg-primary/10 shadow-md hidden md:block">
       <div className="container">
        <h2 className="py-4 text-xl text-black font-bold border-b border-black/20">My <span className='text-blue'>Dashboard</span></h2>
        <nav className="">
         <ul className="mt-3">
          <li><Link href="/customers" className="block p-2 rounded text-primary font-bold hover:text-black hover:bg-gray-200">Bookings</Link></li>
          <li><Link href="/customers" className="block p-2 rounded text-primary font-bold hover:text-black hover:bg-gray-200">Customers</Link></li>
          <li><a href="#" className="block p-2 rounded text-primary font-bold hover:text-black hover:bg-gray-200">Clinics</a></li>
         </ul>
        </nav>
       </div>
      </aside>

      <div className="flex-1 pt-4 px-6 overflow-y-auto">
       <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-black">Welcome Back 👋</h1>
        <div className="[&_a]:block [&_a]:p-2 [&_a]:border [&_a]:border-gray-200 [&_a]:rounded [&_a]:hover:bg-gray-200">
         <a href="#">🔒Logout</a>
        </div>
       </div>

       <div className="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt rem impedit sint nihil veritatis consectetur animi nulla molestias. Quos aut impedit illum sit exercitationem quaerat voluptatibus veritatis at minima!</p>
       </div>
      </div>
     </div>
    </div >
   </div>
  </>
 )
}

export default Admin;
