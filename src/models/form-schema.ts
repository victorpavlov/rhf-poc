import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, {message: 'First Name length should be more than 2 characters'}),
  lastName: z.string().min(2, {message: 'First Name length should be more than 2 characters'}),
  email: z.string().email({message: 'Wrong Email format'}),
  gender: z.string(),
  variants: z.any(),
  freeText: z.string(),
  subscription: z.boolean().or(z.string()).optional(),
});

export default formSchema;