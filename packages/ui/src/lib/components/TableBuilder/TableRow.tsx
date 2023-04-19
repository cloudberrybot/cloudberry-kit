import { useContext } from 'react';
import TableColumns from './TableColumns';
import TableBuilderThemeContext from './context/themeContext';
import { TableRow as TableRowType } from './types';

type TableRowProps = {
  row: TableRowType;
};

export default function TableRow({ row }: TableRowProps) {
  const { theme } = useContext(TableBuilderThemeContext);

  return (
    <tr key={row.id} className={theme.row}>
      <TableColumns forRow={row} />
    </tr>
  );
}
