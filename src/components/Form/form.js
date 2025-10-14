'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  // Zod schema
  const bookSchema = z.object({
    fullName: z
      .string({ required_error: "Name is required*" })
      .min(1, "Name is required*"),
    email: z.string().email("Invalid email").optional(),
    phone: z
      .string()
      .min(10, "Number must be 10 digits")
      .max(10, "Number must be 10 digits")
      .refine((val) => /^\d{10}$/.test(val), {
        message: "Number must be 10 digits",
      }),
    serviceSelect: z.string().refine((val) => val !== "", {
      message: "Please select a service",
    }),
    doctorSelect: z.string().refine((val) => val !== "", {
      message: "Please select a doctor",
    }),
    clinicSelect: z.string().refine((val) => val !== "", {
      message: "Please select a clinic",
    }),
    message: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookSchema),
  });

  const onsubmit = (data) => {
    console.log(data);
    setSubmitted(true); // show thank you message
    reset(); // reset form
  };

  return (
    <div className="bg-white shadow-[0px_0px_15px_0_rgba(0,191,165,0.2)] pt-9 pb-5 px-8">
      <div className="mb-6 text-black">
        <h2>
          Still <span className="text-primary">Have Questions?</span>
        </h2>
      </div>

      {submitted ? (
        <div className="text-green-600 text-lg font-semibold">
          Thank you! Your form has been submitted successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onsubmit)} className="form">
          {/* Full Name */}
          <div className="form-group !w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-700 text-xs pt-2">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-700 text-xs pt-2">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone"
              className="form-control"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-700 text-xs pt-2">{errors.phone.message}</p>
            )}
          </div>

          {/* Service Select */}
          <div className="form-group !w-full">
            <select {...register("serviceSelect")} id="serviceSelect" className="form-control">
              <option value="">Select Services</option>
              <option value="inquiry">Inquiry</option>
              <option value="consultation">Consultation</option>
              <option value="lab_tests">Lab Tests</option>
              <option value="radiology">Radiology</option>
              <option value="surgery">Surgery</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
            {errors.serviceSelect && (
              <p className="text-red-700 text-xs pt-2">{errors.serviceSelect.message}</p>
            )}
          </div>

          {/* Doctor Select */}
          <div className="form-group">
            <select {...register("doctorSelect")} id="doctorSelect" className="form-control">
              <option value="">Select Doctor</option>
              <option value="dr_raj">Dr. Raj Sharma</option>
              <option value="dr_sita">Dr. Sita Joshi</option>
              <option value="dr_hem">Dr. Hem Joshi</option>
              <option value="dr_anil">Dr. Anil Maharjan</option>
            </select>
            {errors.doctorSelect && (
              <p className="text-red-700 text-xs pt-2">{errors.doctorSelect.message}</p>
            )}
          </div>

          {/* Clinic Select */}
          <div className="form-group">
            <select {...register("clinicSelect")} id="clinicSelect" className="form-control">
              <option value="">Select Clinic</option>
              <option value="general_clinic">General Clinic</option>
              <option value="pediatrics_clinic">Pediatrics Clinic</option>
              <option value="dermatology_clinic">Dermatology Clinic</option>
              <option value="cardiology_clinic">Cardiology Clinic</option>
              <option value="neurology_clinic">Neurology Clinic</option>
              <option value="orthopedic_clinic">Orthopedic Clinic</option>
              <option value="radiology_clinic">Radiology Clinic</option>
              <option value="dental_clinic">Dental Clinic</option>
              <option value="physiotherapy_clinic">Physiotherapy Clinic</option>
              <option value="lab_services">Lab Services</option>
              <option value="pharmacy_services">Pharmacy Services</option>
            </select>
            {errors.clinicSelect && (
              <p className="text-red-700 text-xs pt-2">{errors.clinicSelect.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="form-group !w-full">
            <textarea
              placeholder="Message"
              className="form-control !h-20"
              {...register("message")}
            />
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button type="submit" className="bg-primary border-primary btn btn-secondary !w-full">
              Submit Now
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
