import { UseControllerProps, useController } from 'react-hook-form';

export type TextFieldValue = string;

type TextFieldProps<FormValues extends object> = UseControllerProps<FormValues>;

export const TextField = <FormValues extends object>(
  props: TextFieldProps<FormValues>,
) => {
  const { field } = useController(props);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...field} placeholder={props.name} />;
};
