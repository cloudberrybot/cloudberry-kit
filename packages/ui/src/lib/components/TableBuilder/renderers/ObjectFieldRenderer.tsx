import { FieldRendererProps } from '../types';

export default function ObjectFieldRenderer({
  value,
  type,
  isDynamicValue,
  dataKeyField,
  dataValueField,
  data
}: FieldRendererProps) {
  if (type !== 'object') {
    return <span></span>;
  }

  if (isDynamicValue && data && dataKeyField && dataValueField) {
    const cellValue = data[dataKeyField as any][dataValueField];
    return <span>{cellValue}</span>;
  }

  if (!isDynamicValue && value) {
    return <span>{value}</span>;
  }

  return null;
}
