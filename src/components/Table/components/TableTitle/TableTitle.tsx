import { useState } from 'react';
import { TableControls } from './TableControls';

import styles from './TableTitle.module.scss';

export const TableTitle = () => {
  const [displayCount, setDisplayCount] = useState(2);

  const onChangeCount = (count: number) => {
    setDisplayCount(count);
  };

  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>Смартфоны</h2>
      <TableControls
        displayCount={displayCount}
        onChangeCount={onChangeCount}
      />
    </div>
  );
};
