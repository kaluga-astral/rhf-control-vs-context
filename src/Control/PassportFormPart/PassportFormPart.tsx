import { Control } from 'react-hook-form';

import { TextField, TextFieldValue } from '../TextField';

export type PassportFormPartProps = {
  control: Control<PassportFormPartValues>;
};

export type PassportFormPartValues = {
  name: TextFieldValue;
  surname?: TextFieldValue;
};

export const PassportFormPart = ({ control }: PassportFormPartProps) => {
  return (
    <fieldset>
      <TextField name="name" control={control} />
      <TextField name="surname" control={control} />
    </fieldset>
  );
};
