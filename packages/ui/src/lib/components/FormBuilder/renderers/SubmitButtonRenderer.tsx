import { useContext } from 'react';
import FormBuilderThemeContext from '../context/themeContext';
import { FormFieldRendererProps } from '../types';

export default function SubmitButtonRenderer({
  id,
  label
}: FormFieldRendererProps) {
  const theme = useContext(FormBuilderThemeContext);

  return (
    <button id={id} type='submit' className={theme.submit} data-testid={id}>
      {label}
    </button>
  );
}
