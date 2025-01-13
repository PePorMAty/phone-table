import { TableControls } from './TableControls';

import styles from './TableTitle.module.scss';

interface TableTitleProps {
  displayCount: number;
  handleOnChangeCount: (count: number) => void;
}

export const TableTitle = ({
  displayCount,
  handleOnChangeCount,
}: TableTitleProps) => {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>Смартфоны</h2>
      <TableControls
        displayCount={displayCount}
        onChangeCount={handleOnChangeCount}
      />
    </div>
  );
};
