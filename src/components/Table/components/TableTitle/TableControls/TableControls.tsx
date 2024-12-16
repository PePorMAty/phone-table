import { Button } from 'components/Button';

import styles from './TableControls.module.scss';

const possibleItemsCount = [2, 3, 4, 5, 6];

interface TableControlsProps {
  displayCount?: number;
  onChangeCount: (count: number) => void;
}

export const TableControls = ({
  displayCount,
  onChangeCount,
}: TableControlsProps) => {
  return (
    <div className={styles.itemsCount}>
      <span className={styles.text}>Отобразить товары:</span>
      <ul className={styles.list}>
        {possibleItemsCount.map((count) => {
          return (
            <li key={count}>
              <Button
                additionalClassName={styles.count}
                isActive={displayCount === count}
                onClick={() => onChangeCount(count)}
              >
                {count}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
