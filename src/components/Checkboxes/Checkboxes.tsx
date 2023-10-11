import { Controller } from 'react-hook-form';
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { IRadios } from '../../types';

const Checkboxes = ({ name, label, control, options }: IRadios) => {
  return (
    <FormControl component='fieldset'>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormGroup>
        {options?.map((option, i) => (
          <Controller
            key={`${name}-${option.value}`}
            name={`${name}[${i}]`}
            control={control}
            render={({ field }) => (
              <FormControlLabel
                value={option.value}
                control={
                  <Checkbox
                    onChange={(event) => {
                      field.onChange(
                        event.target.checked ? option.value : ''
                      );
                    }}
                  />
                }
                label={option.label}
              />
            )}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxes;
