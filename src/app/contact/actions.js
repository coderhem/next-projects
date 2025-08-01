'use server'

import { z } from 'zod'

const schema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
})

export async function handleSubmit(formData) {
  const rawData = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  }

  const result = schema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Process the data here (save to DB, send email, etc.)
  return { success: true }
}
