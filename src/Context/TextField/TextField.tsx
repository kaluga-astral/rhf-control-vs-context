import { FieldPath, RegisterOptions, useFormContext } from 'react-hook-form';

export type TextFieldValue = string;

type TextFieldProps<FormValues extends object> = RegisterOptions<FormValues> & {
  name: FieldPath<FormValues>;
};

export const TextField = <FormValues extends object>(
  props: TextFieldProps<FormValues>,
) => {
  const { register } = useFormContext<FormValues>();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...register(props.name, props)} />;
};
