import { useEffect, useState } from 'react';

import { useAppDispatch } from 'store';
import { changeDisplayPhonesCount } from 'store/slices/phonesSlice/phonesSlice';

import { TableControls } from './TableControls';

import styles from './TableTitle.module.scss';

export const TableTitle = () => {
  const [displayCount, setDisplayCount] = useState(3);

  const dispatch = useAppDispatch();

  const handleOnChangeCount = (count: number) => {
    setDisplayCount(count);
  };

  useEffect(() => {
    dispatch(changeDisplayPhonesCount(displayCount));
  }, [displayCount]);

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
