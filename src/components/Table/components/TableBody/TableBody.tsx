import { useSelector } from 'react-redux';

import { TableRowsType } from 'store/models/phone/phone';
import { selectDifferentTableRows } from 'store/slices/phonesSlice/phonesSlice';

import { TableRow } from './components/TableRow';

import styles from './TableBody.module.scss';

interface TableBodyProps {
  tableRows: TableRowsType[];
  isShowDifferences: boolean;
}

export const TableBody = ({ tableRows, isShowDifferences }: TableBodyProps) => {
  const differentTableRows = useSelector(selectDifferentTableRows);

  if (isShowDifferences) {
    tableRows = differentTableRows.filter(Boolean) as TableRowsType[];
  }

  return (
    <div className={styles.tableBody}>
      {tableRows.map(({ rowName, rowTitle, rowChars }) => (
        <TableRow key={rowName} title={rowTitle} chars={rowChars} />
      ))}
    </div>
  );
};
