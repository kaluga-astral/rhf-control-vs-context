import { useFormContext } from 'react-hook-form';

import { TextField, TextFieldValue } from '../TextField';

import { Numbers, NumbersValues } from './Numbers';

export type PassportFormPartValues = {
  name: TextFieldValue;
  surname?: TextFieldValue;
} & NumbersValues;

export const PassportFormPart = () => {
  const { control } = useFormContext<PassportFormPartValues>();

  return (
    <fieldset>
      <TextField name="name" control={control} />
      <TextField name="surname" control={control} />
      <Numbers />
    </fieldset>
  );
};
