import { FormProvider, useForm } from 'react-hook-form';

import { PassportFormPart, PassportFormPartValues } from '../PassportFormPart';
import { TextField, TextFieldValue } from '../TextField';

// Минусы:
// 1. Необходимо прокидывать values в generic
// 2. Generic не выдаст ошибку, если в него ничего не прокинуть
// 3. Не синхронизованные типы, то есть у TextField нет гарантий связи с form. В Generic TextField можно прокинуть любой тип

// Плюсы:
// 1. Не нужно прокидывать control вниз по дереву
// 2. Простое переиспользование частей формы

type MainFormValues = {
  organizationName: TextFieldValue;
} & PassportFormPartValues;

export const MainForm = () => {
  const form = useForm<MainFormValues>();

  const onSubmit = (data: MainFormValues) => console.log(data);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField<MainFormValues> name="organizationName" />
        <PassportFormPart />
      </form>
    </FormProvider>
  );
};
