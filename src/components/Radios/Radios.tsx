import { Controller } from "react-hook-form";
import {
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
} from '@mui/material';
import { IRadios } from '../../types';

const Radios = ({ name, label, control, options }: IRadios) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            {options?.map((option) => (
              <FormControlLabel
                key={`${name}-${option.value}`}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default Radios;
