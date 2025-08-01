'use client';
import { handleSubmit } from '@/app/contact/actions'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { z } from "zod";

const ContactForm = () => {

  const bookSchema = z.object({
    fullName: z
      .string({ required_error: "Name is required*" })
      .min(1, "Name is required*")
      .refine((val) => val !== null && val !== '', {
        message: "Name is required*",
      }),

    email: z.string().email("Email is required*").optional(),

    phone: z
      .string()
      .refine((val) => val !== null && val !== '', {
        message: "Phone Number is required*",
      })
      .regex(/^\d{10}$/, "Number must be 10 digits"),

    serviceSelect: z.string().refine((val) => val !== "", {
      message: "Please select a service"
    }),
    doctorSelect: z.string().refine((val) => val !== "", {
      message: "Please select a doctor"
    }),
    clinicSelect: z
      .string({ required_error: "Please select a clinic" })
      .min(1, "Please select a service"),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      resolver: zodResolver(bookSchema)
    }
  );
  const onsubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className="bg-white shadow-[0px_0px_15px_0_rgba(0,191,165,0.2)] pt-9 pb-5 px-8">
        <div className="mb-6 text-black">
          <h2>Still <span className='text-[var(--primary)]'>Have Questions?</span></h2>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onsubmit)} className='form'>
            <div className="form-group !w-full">
              <input type="text" name='fullName' placeholder='Full Name' className="form-control"
                {...register("fullName")}
              />
              {errors?.fullName && <p className='text-red-700 text-xs pt-2'>{`${errors.fullName.message}`}</p>}

            </div>
            <div className="form-group">
              <input type="email" className='form-control' name='email' placeholder='Email'
                {...register("email")}
              />
              {errors?.email && <p className='text-red-700 text-xs pt-2'>{`${errors.email.message}`}</p>}

            </div>
            <div className="form-group">
              <input type="text" className='form-control' name='phone' placeholder='Phone'
                {...register("phone")}
              />
              {errors?.phone && <p className='text-red-700 text-xs pt-2'>{`${errors.phone.message}`}</p>}

            </div>
            <div className="form-group !w-full">
              <select {...register("serviceSelect")} name="" id="" className='form-control'>
                <option value="" disabled>Services</option>
                <option value="">Services</option>
                <option value="">Services</option>
              </select>
              {errors?.serviceSelect && <p className='text-red-700 text-xs pt-2'>{`${errors.serviceSelect.message}`}</p>}
            </div>

            <div className="form-group">
              <select  {...register("doctorSelect")} name="" id="" className='form-control'>
                <option value="" disabled>Doctor</option>
                <option value="">Services</option>
                <option value="">Services</option>
              </select>
              {errors?.doctorSelect && <p className='text-red-700 text-xs pt-2'>{`${errors.doctorSelect.message}`}</p>}

            </div>
            <div className="form-group">
              <select {...register("clinicSelect")} name="" id="" className='form-control'>
                <option value="Clinic 1" disabled>Clinic</option>
                <option value="Clinic 2">Services</option>
                <option value="Clinic 3">Services</option>
              </select>
              {errors?.clinicSelect &&
                <p className='text-red-700 text-xs pt-2'>
                  {`${errors.clinicSelect.message}`}
                </p>}
            </div>
            <div className="form-group !w-full">
              <textarea name="" id="" className='form-control !h-20'></textarea>
            </div>
            <div className="w-full">
              <button type='submit' className='bg-[var(--primary)] border-[var(--primary)] btn btn-secondary !w-full'>
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
