import { TableRowsType } from 'store/models/phone/phone';

import { TableRow } from './components/TableRow';

import styles from './TableBody.module.scss';

interface TableBodyProps {
  tableRows: TableRowsType[];
  isShowDifferences: boolean;
  differentTableRows: TableRowsType[];
}

export const TableBody = ({
  tableRows,
  isShowDifferences,
  differentTableRows,
}: TableBodyProps) => {
  return (
    <div className={styles.tableBody}>
      {isShowDifferences
        ? differentTableRows.map(({ rowName, rowTitle, rowChars }) => (
            <TableRow key={rowName} title={rowTitle} chars={rowChars} />
          ))
        : tableRows.map(({ rowName, rowTitle, rowChars }) => (
            <TableRow key={rowName} title={rowTitle} chars={rowChars} />
          ))}
    </div>
  );
};
