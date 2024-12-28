import { TableRowsType } from 'store/models/phone/phone';

import { TableRow } from './components/TableRow';

import styles from './TableBody.module.scss';

interface TableBodyProps {
  tableRows: TableRowsType[];
}

export const TableBody = ({ tableRows }: TableBodyProps) => {
  return (
    <div className={styles.tableBody}>
      {tableRows.map(({ rowName, rowTitle, rowChars }) => (
        <TableRow key={rowName} title={rowTitle} chars={rowChars} />
      ))}
    </div>
  );
};
