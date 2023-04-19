import { useContext } from 'react';
import TableBuilderThemeContext from './context/themeContext';
import { nanoid } from 'nanoid';
import TableRow from './TableRow';

export default function TableRows() {
  const {
    data,
    config: { entity }
  } = useContext(TableBuilderThemeContext) || {};

  if (!data) return null;

  const rows: any[] = data[entity as any];

  const tableRows = rows.map((row: any) => {
    return <TableRow key={nanoid()} row={row} />;
  });

  return <>{tableRows}</>;
}
