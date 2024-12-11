import { TableRow } from './components/TableRow';

import styles from './TableBody.module.scss';

export const TableBody = () => {
  return (
    <div className={styles.tableBody}>
      <TableRow title={'Производитель'} />
      <TableRow title={'Год релиза'} />
    </div>
  );
};
