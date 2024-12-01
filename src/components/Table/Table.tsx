import { TableBody } from './components/TableBody';
import { TableHead } from './components/TableHead';
import { TableTitle } from './components/TableTitle';

import styles from './Table.module.scss';

export const Table = () => {
  return (
    <>
      <TableTitle />
      <div className={styles.table}>
        <TableHead />
        <TableBody />
      </div>
    </>
  );
};
