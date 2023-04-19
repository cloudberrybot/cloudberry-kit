import { ConditionalFormFieldStyles, FormFieldStyles } from '../types';

export default function formFieldStyles({
  id,
  type,
  formState: { dirtyFields, errors },
  overrides,
  theme
}: ConditionalFormFieldStyles) {
  const fieldStyles: FormFieldStyles = overrides
    ? overrides
    : theme.fields[type];

  if (errors.hasOwnProperty(id)) {
    return fieldStyles.error;
  }

  if (dirtyFields[id] && !errors.hasOwnProperty(id)) {
    return fieldStyles.success;
  }

  return fieldStyles.default;
}
