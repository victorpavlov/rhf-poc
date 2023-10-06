import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import data from '../../data/form-data.json';
import {
  Container,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
} from '@mui/material';
import { IRadios } from '../../types';

type Inputs = {
  firstName: string;
  lastName: string;
};

const Radios = ({ name, label, options, defaultValue }: IRadios) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RadioGroup defaultValue={defaultValue} name={name}>
        {options.map((option) => (
          <FormControlLabel
            key={`${name}-${option.value}`}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default function Form() {
  const { fields } = data;

  const { control, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Container maxWidth='sm'>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {fields.map((f) => (
            <Controller
              key={f.name}
              name={f.name}
              control={control}
              render={({ field }) => {
                switch (f.type) {
                  case 'checkbox':
                    return (
                      <FormControlLabel
                        control={<Checkbox />}
                        {...f}
                        {...field}
                      />
                    );
                  case 'radios':
                    return <Radios {...f} {...field} />;
                  default:
                    return <TextField {...f} {...field} />;
                }
              }}
            />
          ))}
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
