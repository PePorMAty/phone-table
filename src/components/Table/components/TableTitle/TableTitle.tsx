import { TableControls } from './TableControls';

import styles from './TableTitle.module.scss';

export const TableTitle = () => {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>Смартфоны</h2>
      <TableControls />
    </div>
  );
};
