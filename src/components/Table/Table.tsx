import { TableBody } from './components/TableBody';
import { TableHead } from './components/TableHead';

import styles from './Table.module.scss';

export const Table = () => {
  return (
    <div className={styles.table}>
      <TableHead />
      <TableBody />
    </div>
  );
};
