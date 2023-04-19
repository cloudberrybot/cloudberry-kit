import { FieldRendererProps } from '../types';
import dayjs from 'dayjs';

export default function DateFieldRenderer({
  value,
  type,
  isDynamicValue,
  dataKeyField,
  data
}: FieldRendererProps) {
  if (type !== 'date') {
    return <span></span>;
  }

  if (isDynamicValue && data && dataKeyField) {
    const cellValue = data[dataKeyField as any];

    const formatedDate = dayjs(cellValue).locale('en-gb').format('DD/MM/YYYY');
    return <span>{formatedDate}</span>;
  }

  if (!isDynamicValue && value) {
    return <span>{value}</span>;
  }

  return null;
}
