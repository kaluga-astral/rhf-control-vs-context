import { useForm } from 'react-hook-form';

import { PassportFormPart, PassportFormPartValues } from '../PassportFormPart';
import { TextField, TextFieldValue } from '../TextField';

// Минусы:
// 1. Необходимо прокидывать control вниз по всему дереву
// 2. Нет возможости без боли переиспользовать части формы из-за типизации Control

// Плюсы:
// 1. Полная синхронизация Values формы и полей

type MainFormValues = {
  organizationName: TextFieldValue;
} & PassportFormPartValues;

export const MainForm = () => {
  const { control, handleSubmit } = useForm<MainFormValues>();

  const onSubmit = (data: MainFormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField name="organizationName" control={control} />
      <PassportFormPart control={control} />
    </form>
  );
};
