import { ReactElement } from 'react';

export interface ColumnRendererProps {
  id: string;
  value: any;
}

export interface TableBodyProps {
  children: JSX.Element | JSX.Element[];
}

export interface TableColumn {
  label: string;
  value?: any;
  type: string | object | boolean | JSX.Element;
  isDynamicValue: boolean;
  dataKeyField?: string;
  dataValueField?: string;
  renderer: (row: any) => ReactElement<ColumnRendererProps>;
}

export interface TableRow {
  id: string;
  columns: TableColumn[];
}

export type TableHeader = string[];

export interface TableBuilderConfig {
  entity: string;
  header: TableHeader;
  columns: TableColumn[];
}

export interface TableBuilderProps {
  children?: JSX.Element | JSX.Element[];
}

export interface TableRowAction {
  label: string;
  actions?: TableRowAction[];
  onAction: (id: string | number, action: string) => void;
}

export interface FieldRendererProps
  extends Omit<TableColumn, 'renderer' | 'actions'> {
  data: any;
}

export interface TableBuilderTheme {
  builder: string;
  table: string;
  body: string;
  row: string;
  column: string;
  columns: {
    [type: string]: any;
  };
  actions?: {
    [action: string]: any;
  };
}

export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;
