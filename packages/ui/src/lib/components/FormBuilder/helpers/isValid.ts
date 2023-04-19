import { FieldErrors } from 'react-hook-form';

export default function isValidField(field: string, errors: FieldErrors) {
  return !errors.hasOwnProperty(field);
}
