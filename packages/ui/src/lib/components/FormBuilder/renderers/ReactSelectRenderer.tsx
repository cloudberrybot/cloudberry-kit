import { useContext } from 'react';
import FormBuilderThemeContext from '../context/themeContext';
import { formFieldStyles } from '../helpers';
import isValid from '../helpers/isValid';
import { FormFieldRendererProps, FormFieldTypes } from '../types';
import StyledReactSelect from '../../StyledReactSelect/StyledReactSelectController';
import StyledReactSelectController from '../../StyledReactSelect/StyledReactSelectController';

export default function ReactSelectRenderer({
  id,
  label,
  errorMessage,
  formState,
  control,
  icons,
  otherProps
}: FormFieldRendererProps) {
  const { dirtyFields, errors } = formState;
  const { success: successIcon, error: errorIcon } = icons;
  const { selectOptions = [] } = otherProps || {};

  console.debug({ control });
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
        <StyledReactSelectController
          id={id}
          options={selectOptions}
          control={control}
        />
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
