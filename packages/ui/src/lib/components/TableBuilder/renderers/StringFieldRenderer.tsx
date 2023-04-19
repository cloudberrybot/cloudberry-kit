import { FieldRendererProps } from '../types';

export default function StringFieldRenderer({
  value,
  type,
  isDynamicValue,
  dataKeyField,
  data
}: FieldRendererProps) {
  if (type !== 'text') {
    return <span></span>;
  }

  if (isDynamicValue && data && dataKeyField) {
    const cellValue = data[dataKeyField as any];
    return <span>{cellValue}</span>;
  }

  if (!isDynamicValue && value) {
    return <span>{value}</span>;
  }

  return null;
}
