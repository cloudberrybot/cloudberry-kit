import { useContext } from 'react';
import TableBuilderThemeContext from './context/themeContext';
import { TableColumn as TableColumnType } from './types';

type TableColumnProps = {
  column: TableColumnType;
  forRow: any;
};

export default function TableColumn({ forRow, column }: TableColumnProps) {
  const { theme } = useContext(TableBuilderThemeContext);

  if (column.isDynamicValue && column.dataKeyField) {
    return (
      <td className={theme.columns[column.dataKeyField]}>
        {column.renderer(forRow)}
      </td>
    );
  }

  return <td className={theme.column}>{column.renderer(forRow)}</td>;
}
