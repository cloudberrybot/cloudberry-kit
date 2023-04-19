import { useContext } from 'react';
import FormBuilderThemeContext from '../context/themeContext';
import { formFieldStyles } from '../helpers';
import isValid from '../helpers/isValid';
import { FormFieldRendererProps, FormFieldTypes } from '../types';

export default function SelectInputRenderer({
  id,
  label,
  errorMessage,
  register,
  formState,
  icons,
  otherProps
}: FormFieldRendererProps) {
  const { dirtyFields, errors } = formState;
  const { success: successIcon, error: errorIcon } = icons;
  const { shareClasses = [] } = otherProps || {};

  const theme = useContext(FormBuilderThemeContext);

  return (
    <div>
      <label
        htmlFor={id}
        data-testid={`${id}-label`}
        className='block text-sm font-medium mb-2 text-black dark:text-white'
      >
        {label}
      </label>
      <div className='relative'>
        <select
          id={id}
          data-testid={`${id}-select`}
          defaultValue={''}
          className={formFieldStyles({
            id: id,
            type: FormFieldTypes.DROPDOWN,
            formState: {
              dirtyFields,
              errors
            },
            theme
          })}
          {...register(id, {
            required: true
          })}
          aria-describedby={`${id}-error`}
        >
          <option value='' disabled className='text-xs'>
            Select a value
          </option>
          {shareClasses.map((shareClass: string) => (
            <option key={shareClass} value={shareClass}>
              {shareClass}
            </option>
          ))}
        </select>
        <div
          data-testid={`${id}-success-icon`}
          className={`${
            dirtyFields[id] && isValid(id, errors) ? 'block' : 'hidden'
          } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8`}
        >
          {successIcon}
        </div>
        <div
          data-testid={`${id}-error-icon`}
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
