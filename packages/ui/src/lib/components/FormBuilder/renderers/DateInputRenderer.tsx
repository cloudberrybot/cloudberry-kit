import { useContext } from 'react';
import FormBuilderThemeContext from '../context/themeContext';
import { formFieldStyles } from '../helpers';
import isValid from '../helpers/isValid';
import { FormFieldRendererProps, FormFieldTypes } from '../types';

export default function DateInputRenderer({
  id,
  type,
  label,
  errorMessage,
  register,
  formState,
  icons,
  otherProps
}: FormFieldRendererProps) {
  const { dirtyFields, errors } = formState;
  const { success: successIcon, error: errorIcon } = icons;
  const theme = useContext(FormBuilderThemeContext);

  return (
    <div>
      <label
        htmlFor={id}
        data-testid={`${id}-label`}
        className='block text-sm text-black font-medium mb-2 dark:text-white'
      >
        {label}
      </label>
      <div className='relative'>
        <input
          {...register(id, {
            required: true
          })}
          type={type}
          id={id}
          name={id}
          className={formFieldStyles({
            id: id,
            type: FormFieldTypes.DATE,
            formState: {
              dirtyFields,
              errors
            },
            theme
          })}
          aria-describedby={`${id}-error`}
        />
        <div
          className={`${
            dirtyFields[id] && isValid(id, errors) ? 'block' : 'hidden'
          } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-10`}
        >
          {successIcon}
        </div>
        <div
          className={`${
            isValid(id, errors) ? 'hidden' : 'block'
          } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-10`}
        >
          {errorIcon}
        </div>
      </div>
      <p
        className={`${
          isValid(id, errors) ? 'hidden' : 'block'
        } text-xs text-red-600 mt-2`}
        id={`${id}-error`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
