import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormFieldDef } from './types';
import { useCallback, useContext } from 'react';
import SuccessIcon from '../Icons/SuccessIcon';
import ErrorIcon from '../Icons/ErrorIcon';
import FormBuilderThemeContext from './context/themeContext';

type FormBuilderProps = {
  schema: yup.ObjectSchema<any>;
  fields: FormFieldDef[];
  onSubmit: (data: any) => void;
};

export default function FormBuilder({
  schema,
  fields,
  onSubmit
}: FormBuilderProps) {
  const { register, handleSubmit, formState, control } = useForm({
    mode: 'all',
    resolver: yupResolver(schema)
  });

  const theme = useContext(FormBuilderThemeContext);

  const renderFormFields = useCallback(() => {
    return fields
      .map((field) => {
        const { id, label, type, errorMessage, renderer } = field;

        const props = {
          key: id,
          id,
          label,
          formState,
          type,
          errorMessage,
          register,
          control,
          icons: {
            success: <SuccessIcon />,
            error: <ErrorIcon />
          }
        };

        return renderer(props);
      })
      .filter(Boolean);
  }, [control, fields, formState, register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={theme.wrapper}>{renderFormFields()}</div>
    </form>
  );
}
