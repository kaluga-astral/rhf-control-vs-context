import { FormProvider, useForm } from 'react-hook-form';

import { PassportFormPart, PassportFormPartValues } from '../PassportFormPart';
import { TextField, TextFieldValue } from '../TextField';

// Минусы:
// 1. Необходимо прокидывать control в каждый Field
// 2. Необходимо оборачивать всю форму в контекст

// Плюсы:
// 1. Полная синхронизация Values формы и полей
// 2. Простое переиспользование частей формы
// 3. Нет необходимости прокидывать control вниз по всему дереву компонентов (используетс context)

type MainFormValues = {
  organizationName: TextFieldValue;
} & PassportFormPartValues;

export const MainForm = () => {
  const form = useForm<MainFormValues>();

  const onSubmit = (data: MainFormValues) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField name="organizationName" control={form.control} />
        <PassportFormPart />
      </form>
    </FormProvider>
  );
};
