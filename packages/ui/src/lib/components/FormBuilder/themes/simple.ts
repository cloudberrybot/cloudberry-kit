import { FormBuilderTheme } from '../types';

const simpleTheme: FormBuilderTheme = {
  fields: {
    text: {
      error:
        'py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      success:
        'py-3 px-4 block w-full border-green-500 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      default:
        'py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
    },
    dropdown: {
      error:
        'py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      success:
        'py-3 px-4 block w-full border-green-500 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      default:
        'py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
    },
    number: {
      error:
        'py-3 px-4 pl-14 pr-16 block w-full border-red-500 shadow-sm rounded-md text-md focus:z-10 focus:border-red-500 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      success:
        'py-3 px-4 pl-14 pr-16 block w-full border-green-200 shadow-sm rounded-md text-md focus:z-10 focus:border-green-500 focus:ring-green-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      default:
        'py-3 px-4 pl-14 pr-16 block w-full border-gray-200 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
    },
    date: {
      error:
        'py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      success:
        'py-3 px-4 block w-full border-green-500 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
      default:
        'py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400',
    },
  },
  wrapper: 'grid gap-y-4',
  submit:
    'py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-gray-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-200 dark:hover:text-gray-800',
};

export default simpleTheme;
