import { useAppSelector } from 'store';
import { selectTableRows } from 'store/slices/phonesSlice/phonesSlice';

import { TableRow } from './components/TableRow';

import styles from './TableBody.module.scss';

export const TableBody = () => {
  const tableRows = useAppSelector(selectTableRows);

  return (
    <div className={styles.tableBody}>
      {tableRows.map(({ rowName, rowTitle }) => (
        <TableRow key={rowName} title={rowTitle} />
      ))}
    </div>
  );
};
