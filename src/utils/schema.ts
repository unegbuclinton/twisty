import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'First name is required'),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'Invalid email address' }),
  breed: z.string().min(1, { message: 'Breed is required' }),
})
