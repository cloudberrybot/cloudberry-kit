import { useContext } from 'react';
import TableBody from './TableBody';
import { TableHeader } from './TableHeader';
import TableRows from './TableRows';
import TableBuilderThemeContext from './context/themeContext';

export default function Table() {
  const { theme } = useContext(TableBuilderThemeContext);

  return (
    <table className={theme.table}>
      <Table.Header />
      <Table.Body>
        <Table.Rows />
      </Table.Body>
    </table>
  );
}

Table.Header = TableHeader;
Table.Rows = TableRows;
Table.Body = TableBody;
