import { TextField, TextFieldValue } from '../TextField';

import { Numbers, NumbersValues } from './Numbers';

export type PassportFormPartValues = {
  name: TextFieldValue;
  surname?: TextFieldValue;
} & NumbersValues;

export const PassportFormPart = () => {
  return (
    <fieldset>
      <TextField<PassportFormPartValues> name="name" />
      <TextField<PassportFormPartValues> name="surname" />
      <TextField name="unknown" />
      <Numbers />
    </fieldset>
  );
};
