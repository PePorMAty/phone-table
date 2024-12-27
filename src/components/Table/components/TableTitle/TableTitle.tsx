import { useAppDispatch, useAppSelector } from 'store';
import {
  changeDisplayPhonesCount,
  selectDisplayPhonesCount,
} from 'store/slices/phonesSlice/phonesSlice';

import { TableControls } from './TableControls';

import styles from './TableTitle.module.scss';

export const TableTitle = () => {
  const displayCount = useAppSelector(selectDisplayPhonesCount);
  const dispatch = useAppDispatch();

  const handleOnChangeCount = (count: number) => {
    dispatch(changeDisplayPhonesCount(count));
  };

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
