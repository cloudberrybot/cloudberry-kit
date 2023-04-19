import { createContext } from 'react';
import theme from '../themes/minimalist';
import { TableBuilderConfig } from '../types';

const exampleConfig: TableBuilderConfig = {
  entity: 'example',
  header: ['Name', 'Last name', 'Email'],
  columns: [
    {
      label: 'Name',
      type: 'text',
      value: 'John',
      isDynamicValue: false,
      renderer: function renderer() {
        return <span>{this.value}</span>;
      },
    },
    {
      label: 'Last name',
      type: 'text',
      value: 'Doe',
      isDynamicValue: false,
      renderer: function renderer() {
        return <span>{this.value}</span>;
      },
    },
    {
      label: 'Email',
      type: 'text',
      value: 'test@example.com',
      isDynamicValue: false,
      renderer: function renderer() {
        return <span>{this.value}</span>;
      },
    },
  ],
};

const TableBuilderThemeContext = createContext({
  theme: theme,
  config: exampleConfig,
  data: [],
});

export default TableBuilderThemeContext;
