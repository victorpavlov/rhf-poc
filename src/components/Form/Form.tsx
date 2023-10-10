import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema from '../../models/form-schema';
import * as z from 'zod';
import data from '../../data/form-data.json';
import {
  Container,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import Radios from '../Radios/Radios';

type FormSchema = z.infer<typeof formSchema>;

export default function Form() {
  const fields = formSchema.keyof()._def.values;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormSchema> = (d) => console.log(d);

  return (
    <Container maxWidth='sm'>
      <h1>Form</h1>
      {errors.firstName?.message}
      {errors.lastName?.message}
      {errors.email?.message}
      {errors.gender?.message}
      {errors.subscription?.message}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {fields.map((f) => {
            switch (data[f].type) {
              case 'checkbox':
                return (
                  <Controller
                    key={f}
                    name={f}
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        {...data[f]}
                        {...field}
                        control={<Checkbox />}
                      />
                    )}
                  />
                );
              case 'radios':
                return <Radios key={f} name={f} {...data[f]} control={control} />;
              default:
                return (
                  <Controller
                    key={f}
                    name={f}
                    control={control}
                    render={({ field }) => (
                      <TextField {...data[f]} {...field} />
                    )}
                  />
                );
            }
          })}
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
