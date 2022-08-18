import { TextField, TextFieldValue } from '../../TextField';

export type NumbersValues = {
  series: TextFieldValue;
  code: TextFieldValue;
};

export const Numbers = () => {
  return (
    <fieldset>
      <TextField<NumbersValues> name="series" />
      <TextField<NumbersValues> name="code" />
    </fieldset>
  );
};
