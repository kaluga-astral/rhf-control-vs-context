import { useFormContext } from 'react-hook-form';

import { TextField, TextFieldValue } from '../../TextField';

export type NumbersValues = {
  series: TextFieldValue;
  code: TextFieldValue;
};

export const Numbers = () => {
  const { control } = useFormContext<NumbersValues>();

  return (
    <fieldset>
      <TextField name="series" control={control} />
      <TextField name="code" control={control} />
    </fieldset>
  );
};
