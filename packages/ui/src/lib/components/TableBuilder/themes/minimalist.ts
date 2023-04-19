import { TableBuilderTheme } from '../types';

const theme: TableBuilderTheme = {
  columns: {
    investorName:
      'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200',
    shareClass:
      'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200',
    subscription:
      'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-right',
    submissionDate:
      'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center',
  },
  body: 'divide-y divide-gray-200 dark:divide-gray-700',
  builder: 'flex  min-w-full align-middle w-full overflow-x-auto',
  table: 'min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto',
  row: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  column:
    'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200',
};

export default theme;
