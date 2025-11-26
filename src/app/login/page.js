"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
 const router = useRouter();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errorEmail, setErrorEmail] = useState(false);
 const [errorPassword, setErrorPassword] = useState(false);
 const [loading, setLoading] = useState(false);
 const [showPassword, setShowPassword] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorEmail(false);
  setErrorPassword(false);
  setLoading(true);

  try {
   const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
   });

   const data = await res.json();
   setLoading(false);

   if (data.success) {
    router.push("/dashboard");
   } else {
    if (data.message === "User not found") setErrorEmail(true);
    if (data.message === "Incorrect password") setErrorPassword(true);
   }
  } catch (err) {
   console.error("Login error:", err);
   setLoading(false);
  }
 };

 return (
  <section className="py-10 lg:py-14">
   <div className="container">
    <div className="max-w-lg mx-auto">
     <div className="shadow px-3 py-5 overflow-hidden relative before:absolute before:size-20 before:bg-primary before:rounded-full before:-top-10 before:-left-10 before:blur-2xl after:absolute after:size-20 after:bg-primary after:rounded-full after:-top-0 after:right-0 after:blur-3xl after:z-[-1]">
      <h2 className="h5 text-primary mb-5 pl-3 text-center">Login</h2>

      <form onSubmit={handleSubmit}>
       {/* Email */}
       <div className="form-group !w-full">
        <label
         htmlFor="username"
         className="text-black/70 mb-2 block text-sm font-medium"
        >
         Email
        </label>
        <input
         type="email"
         name="username"
         id="username"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="form-control text-base"
         required
        />
       </div>

       {/* Password with Eye Icon */}
       <div className="form-group !w-full">
        <label
         htmlFor="password"
         className="text-black/70 mb-2 block text-sm font-medium"
        >
         Password
        </label>

        <div className="relative">
         <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control text-base pr-10"
          required
         />

         {/* Eye toggle button */}
         <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-6 flex items-center text-gray-500/60 hover:text-primary"
          tabIndex={-1}
         >
          <i
           className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"
            } text-sm`}
          ></i>
         </button>
        </div>

        <span
         className={`text-xs py-3 text-red ${errorPassword ? "block" : "hidden"
          }`}
        >
         Invalid Password
        </span>
       </div>

       <div className="px-3">
        <button type="submit" className="w-full btn btn-green">
         {loading ? "Logging in..." : "Login"}
        </button>
       </div>

       <span
        className={`text-xs text-red text-center py-3 ${errorEmail ? "block" : "hidden"
         }`}
       >
        User Not Found
       </span>

       <div className="pt-4 text-center">
        <p>
         If you don&apos;t have a membership{" "}
         <Link
          href="/membership"
          className="text-primary !underline hover:!no-underline"
         >
          Get Here
         </Link>
        </p>
       </div>
      </form>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Login;
