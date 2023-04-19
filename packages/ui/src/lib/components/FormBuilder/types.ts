import { ReactElement } from 'react';
import {
  Control,
  FieldErrors,
  FieldNamesMarkedBoolean,
  FieldValues,
  FormState,
  UseFormRegister
} from 'react-hook-form';

export type FormFieldStyles = {
  error: string;
  success: string;
  default: string;
};

export enum FormFieldTypes {
  TEXT = 'text',
  NUMBER = 'number',
  DROPDOWN = 'dropdown',
  DATE = 'date'
}

export type ConditionalFormFieldStyles = {
  id: string;
  type: FormFieldTypes;
  formState: {
    dirtyFields: FieldNamesMarkedBoolean<FieldValues>;
    errors: FieldErrors;
  };
  overrides?: FormFieldStyles;
  theme: FormBuilderTheme;
};

export interface FormFieldRendererProps {
  id: string;
  label: string;
  type: string;
  errorMessage: string;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  control?: Control<FieldValues> | undefined;
  icons: {
    success: React.ReactNode;
    error: React.ReactNode;
  };
  otherProps?: any;
}

export interface FormFieldDef
  extends Omit<FormFieldRendererProps, 'register' | 'formState' | 'icons'> {
  renderer: (
    props: FormFieldRendererProps
  ) => ReactElement<FormFieldRendererProps>;
}

export interface FormBuilderTheme {
  fields: {
    [field: string]: any;
  };
  wrapper: string;
  submit: string;
}
