import { useContext } from 'react';
import TableBuilderThemeContext from './context/themeContext';
import Table from './Table';

export default function TableBuilder() {
  const { theme } = useContext(TableBuilderThemeContext);

  return (
    <div className={theme.builder}>
      <Table />
    </div>
  );
}
