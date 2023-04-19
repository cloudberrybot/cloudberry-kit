import { nanoid } from 'nanoid';
import TableColumn from './TableColumn';
import TableBuilderThemeContext from './context/themeContext';
import { useContext } from 'react';

export type TableColumnProps = {
  forRow: any;
};

export default function TableColumns({ forRow }: TableColumnProps) {
  const {
    config: { columns }
  } = useContext(TableBuilderThemeContext);

  const tableColumns = columns.map((column) => {
    return <TableColumn key={nanoid()} forRow={forRow} column={column} />;
  });

  return <>{tableColumns}</>;
}
