import { useContext } from 'react';
import FormBuilderThemeContext from '../context/themeContext';
import { formFieldStyles } from '../helpers';
import isValid from '../helpers/isValid';
import { FormFieldRendererProps, FormFieldTypes } from '../types';

export default function NumberInputRenderer({
  id,
  type,
  label,
  errorMessage,
  register,
  formState,
  icons
}: FormFieldRendererProps) {
  const { dirtyFields, errors } = formState;
  const { success: successIcon, error: errorIcon } = icons;
  const theme = useContext(FormBuilderThemeContext);

  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-medium mb-2 dark:text-white'
        data-testid={`${id}-label`}
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
            type: FormFieldTypes.NUMBER,
            formState: {
              dirtyFields,
              errors
            },
            theme
          })}
          placeholder='0'
        />
        <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4'>
          <span className='text-gray-500 text-xs'>EUR</span>
        </div>
        <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4'>
          <span className='text-gray-500 text-xs'>€</span>
        </div>

        <div
          className={`${
            dirtyFields[id] && isValid(id, errors) ? 'block' : 'hidden'
          } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8`}
        >
          {successIcon}
        </div>
        <div
          className={`${
            isValid(id, errors) ? 'hidden' : 'block'
          } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8`}
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
