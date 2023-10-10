import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(3, {message: 'Required'}),
  lastName: z.string().min(3, {message: 'Required'}),
  email: z.string().email({message: 'Wrong format'}),
  gender: z.string(),
  subscription: z.boolean(),
});

export default formSchema;