import { useContext } from 'react';
import TableBuilderThemeContext from './context/themeContext';

export function TableHeader() {
  const {
    config: { header }
  } = useContext(TableBuilderThemeContext);

  const tableHeader = header.map((headerCell: string) => {
    return (
      <th
        key={headerCell}
        scope='col'
        className='px-6 py-3 text-left text-xs font-medium text-gray-500'
      >
        {headerCell}
      </th>
    );
  });

  return (
    <thead>
      <tr>{tableHeader}</tr>
    </thead>
  );
}
