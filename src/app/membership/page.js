// "use client";
// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const Membership = () => {
//    const bookSchema = z.object({
//       name: z
//          .string({ required_error: "Name is required*" })
//          .min(1, "Name is required*")
//          .refine((val) => val !== null && val !== "", {
//             message: "Name is required*",
//          }),
//       password: z
//          .string({ required_error: "Password is required*" })
//          .min(1, "Password is required*")
//          .refine((val) => val !== null && val !== "", {
//             message: "Password is required*",
//          }),
//       email: z.string().email("Email is required*").optional(),
//       phone: z
//          .string()
//          .refine((val) => val !== null && val !== "", {
//             message: "Phone number is required*",
//          })
//          .regex(/^\d{10}$/, "Number must be 10 digits"),
//       genderSelect: z.string().refine((val) => val !== "", {
//          message: "Please select a Gender",
//       }),
//       bloodGroupSelect: z.string().refine((val) => val !== "", {
//          message: "Please select a Blood Group",
//       }),
//       address: z.string().optional(),
//    });

//    const {
//       register,
//       handleSubmit,
//       formState: { errors },
//       reset,
//    } = useForm({
//       resolver: zodResolver(bookSchema),
//    });

//    const [successMsg, setSuccessMsg] = useState(""); // success message state

//    const onSubmit = async (data) => {
//       try {
//          const res = await fetch("/api/users", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//          });

//          const result = await res.json();

//          if (res.ok) {
//             console.log("Form Submitted:", result);
//             reset(); // reset form
//             setSuccessMsg(
//                "Your membership request has been submitted successfully!"
//             );
//             setTimeout(() => setSuccessMsg(""), 5000); // remove message after 5s
//          } else {
//             alert("Error: " + result.details);
//          }
//       } catch (err) {
//          console.error("Submission error:", err);
//          alert("Something went wrong!");
//       }
//    };

//    return (
//       <>
//          <section className="py-10 bg-primary/5">
//             <div className="container">
//                <div className="text-center max-w-3xl mx-auto">
//                   <h2 className="h4 text-black mb-2">
//                      <span className="text-primary">Get</span> Membership
//                   </h2>
//                   <p>
//                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At
//                      dolorum quas ipsam libero eaque voluptates mollitia quo,
//                      consequatur sunt enim voluptas, iste magni. Obcaecati culpa cum
//                      exercitationem officiis ad fuga?
//                   </p>
//                </div>
//                <div className="overflow-hidden membership-form pt-10 max-w-3xl shadow-lg mx-auto p-10 rounded-lg relative before:absolute before:size-20 before:bg-primary before:rounded-full before:-top-10 before:-left-10 before:blur-2xl after:absolute after:size-20 after:bg-primary after:rounded-full after:bottom-0 after:right-0 after:blur-3xl after:z-[-1] border border-primary/20">
//                   <form
//                      onSubmit={handleSubmit(onSubmit)}
//                      className="flex flex-wrap"
//                      action=""
//                   >
//                      <div className="form-group !w-full">
//                         <input
//                            type="text"
//                            placeholder="Full Name"
//                            id="name"
//                            className="form-control"
//                            {...register("name")}
//                         />
//                         {errors?.name && (
//                            <p className="text-red-700 text-xs pt-2">
//                               {errors.name.message}
//                            </p>
//                         )}
//                      </div>

//                      <div className="form-group">
//                         <input
//                            type="text"
//                            placeholder="Phone Number"
//                            id="number"
//                            className="form-control"
//                            {...register("phone")}
//                         />
//                         {errors?.phone && (
//                            <p className="text-red-700 text-xs pt-2">
//                               {errors.phone.message}
//                            </p>
//                         )}
//                      </div>

//                      <div className="form-group">
//                         <input
//                            type="email"
//                            placeholder="Email Address"
//                            id="email"
//                            className="form-control"
//                            {...register("email")}
//                         />
//                         {errors?.email && (
//                            <p className="text-red-700 text-xs pt-2">
//                               {errors.email.message}
//                            </p>
//                         )}
//                      </div>
//                      <div className="form-group password">
//                         <input
//                            type="password"
//                            placeholder="Password"
//                            id="password"
//                            className="form-control"
//                            {...register("password")}
//                         />
//                         {errors?.password && (
//                            <p className="text-red-700 text-xs pt-2">
//                               {errors.password.message}
//                            </p>
//                         )}
//                      </div>

//                      <div className="form-group">
//                         <select
//                            id="genderSelect"
//                            className="form-control"
//                            {...register("genderSelect")}
//                         >
//                            <option value="">Select Gender</option>
//                            <option value="Male">Male</option>
//                            <option value="Female">Female</option>
//                            <option value="Others">Others</option>
//                         </select>
//                         {errors?.genderSelect && (
//                            <p className="text-red-700 text-xs pt-2">
//                               {errors.genderSelect.message}
//                            </p>
//                         )}
//                      </div>

//                      <div className="form-group">
//                         <select
//                            id="bloodGroupSelect"
//                            className="form-control"
//                            {...register("bloodGroupSelect")}
//                         >
//                            <option value="">Blood Group</option>
//                            <option value="O+ve">O+ve</option>
//                            <option value="A+ve">A+ve</option>
//                            <option value="B+ve">B+ve</option>
//                            <option value="AB+ve">AB+ve</option>
//                            <option value="O-ve">O-ve</option>
//                            <option value="A-ve">A-ve</option>
//                            <option value="B-ve">B-ve</option>
//                            <option value="AB-ve">AB-ve</option>
//                         </select>
//                         {errors?.bloodGroupSelect && (
//                            <p className="text-red-700 text-xs pt-2">
//                               {errors.bloodGroupSelect.message}
//                            </p>
//                         )}
//                      </div>
//                      <div className="form-group">
//                         <input
//                            type="text"
//                            placeholder="Address"
//                            id="addressDetail"
//                            className="form-control"
//                            {...register("address")}
//                         />
//                      </div>

//                      <div className="px-3 w-full">
//                         <button className="btn btn-green px-3 w-full" type="submit">
//                            Submit
//                         </button>
//                      </div>
//                   </form>
//                   <div className="pt-4 text-center">
//                      <p>
//                         If you have a membership{" "}
//                         <a
//                            href="/login"
//                            className="text-primary !underline hover:!no-underline"
//                         >
//                            Login Here
//                         </a>
//                      </p>
//                   </div>
//                </div>
//             </div>
//          </section>

//          {/* Success Message */}
//          {successMsg && (
//             <div className="success-msg">
//                <p className="text-green-600 text-center pt-4 font-semibold">
//                   {successMsg}
//                </p>
//             </div>
//          )}
//       </>
//    );
// };

// export default Membership;


"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Membership = () => {
   const bookSchema = z.object({
      name: z
         .string({ required_error: "Name is required*" })
         .min(1, "Name is required*")
         .refine((val) => val !== null && val !== "", {
            message: "Name is required*",
         }),
      password: z
         .string({ required_error: "Password is required*" })
         .min(1, "Password is required*")
         .refine((val) => val !== null && val !== "", {
            message: "Password is required*",
         }),
      email: z.string().email("Email is required*").optional(),
      phone: z
         .string()
         .refine((val) => val !== null && val !== "", {
            message: "Phone number is required*",
         })
         .regex(/^\d{10}$/, "Number must be 10 digits"),
      genderSelect: z.string().refine((val) => val !== "", {
         message: "Please select a Gender",
      }),
      bloodGroupSelect: z.string().refine((val) => val !== "", {
         message: "Please select a Blood Group",
      }),
      address: z.string().optional(),
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: zodResolver(bookSchema),
   });

   const [successMsg, setSuccessMsg] = useState("");
   const [showPassword, setShowPassword] = useState(false); // 👈 toggle state

   const onSubmit = async (data) => {
      try {
         const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
         });

         const result = await res.json();

         if (res.ok) {
            console.log("Form Submitted:", result);
            reset();
            setSuccessMsg(
               "Your membership request has been submitted successfully!"
            );
            setTimeout(() => setSuccessMsg(""), 5000);
         } else {
            alert("Error: " + result.details);
         }
      } catch (err) {
         console.error("Submission error:", err);
         alert("Something went wrong!");
      }
   };

   return (
      <>
         <section className="py-10 bg-primary/5">
            <div className="container">
               <div className="text-center max-w-3xl mx-auto">
                  <h2 className="h4 text-black mb-2">
                     <span className="text-primary">Get</span> Membership
                  </h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                     dolorum quas ipsam libero eaque voluptates mollitia quo,
                     consequatur sunt enim voluptas, iste magni. Obcaecati culpa cum
                     exercitationem officiis ad fuga?
                  </p>
               </div>

               <div className="overflow-hidden membership-form pt-10 max-w-3xl shadow-lg mx-auto p-10 rounded-lg relative before:absolute before:size-20 before:bg-primary before:rounded-full before:-top-10 before:-left-10 before:blur-2xl after:absolute after:size-20 after:bg-primary after:rounded-full after:bottom-0 after:right-0 after:blur-3xl after:z-[-1] border border-primary/20">
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="flex flex-wrap"
                     action=""
                  >
                     <div className="form-group !w-full">
                        <input
                           type="text"
                           placeholder="Full Name"
                           id="name"
                           className="form-control"
                           {...register("name")}
                        />
                        {errors?.name && (
                           <p className="text-red-700 text-xs pt-2">
                              {errors.name.message}
                           </p>
                        )}
                     </div>

                     <div className="form-group">
                        <input
                           type="text"
                           placeholder="Phone Number"
                           id="number"
                           className="form-control"
                           {...register("phone")}
                        />
                        {errors?.phone && (
                           <p className="text-red-700 text-xs pt-2">
                              {errors.phone.message}
                           </p>
                        )}
                     </div>

                     <div className="form-group">
                        <input
                           type="email"
                           placeholder="Email Address"
                           id="email"
                           className="form-control"
                           {...register("email")}
                        />
                        {errors?.email && (
                           <p className="text-red-700 text-xs pt-2">
                              {errors.email.message}
                           </p>
                        )}
                     </div>

                     {/* Password Field with Font Awesome Eye Toggle */}
                     <div className="form-group">
                        <div className="relative">
                           <input
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              id="password"
                              className="form-control pr-10"
                              {...register("password")}
                           />
                           <i
                              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"
                                 } absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-gray-500/50 hover:text-primary`}
                              onClick={() => setShowPassword(!showPassword)}
                           ></i>
                        </div>
                        {errors?.password && (
                           <p className="text-red-700 text-xs pt-2">
                              {errors.password.message}
                           </p>
                        )}
                     </div>

                     <div className="form-group">
                        <select
                           id="genderSelect"
                           className="form-control"
                           {...register("genderSelect")}
                        >
                           <option value="">Select Gender</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>
                           <option value="Others">Others</option>
                        </select>
                        {errors?.genderSelect && (
                           <p className="text-red-700 text-xs pt-2">
                              {errors.genderSelect.message}
                           </p>
                        )}
                     </div>

                     <div className="form-group">
                        <select
                           id="bloodGroupSelect"
                           className="form-control"
                           {...register("bloodGroupSelect")}
                        >
                           <option value="">Blood Group</option>
                           <option value="O+ve">O+ve</option>
                           <option value="A+ve">A+ve</option>
                           <option value="B+ve">B+ve</option>
                           <option value="AB+ve">AB+ve</option>
                           <option value="O-ve">O-ve</option>
                           <option value="A-ve">A-ve</option>
                           <option value="B-ve">B-ve</option>
                           <option value="AB-ve">AB-ve</option>
                        </select>
                        {errors?.bloodGroupSelect && (
                           <p className="text-red-700 text-xs pt-2">
                              {errors.bloodGroupSelect.message}
                           </p>
                        )}
                     </div>

                     <div className="form-group">
                        <input
                           type="text"
                           placeholder="Address"
                           id="addressDetail"
                           className="form-control"
                           {...register("address")}
                        />
                     </div>

                     <div className="px-3 w-full">
                        <button className="btn btn-green px-3 w-full" type="submit">
                           Submit
                        </button>
                     </div>
                  </form>

                  <div className="pt-4 text-center">
                     <p>
                        If you have a membership{" "}
                        <a
                           href="/login"
                           className="text-primary !underline hover:!no-underline"
                        >
                           Login Here
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {successMsg && (
            <div className="success-msg">
               <p className="text-green-600 text-center pt-4 font-semibold">
                  {successMsg}
               </p>
            </div>
         )}
      </>
   );
};

export default Membership;
