import { useState } from 'react';

import { TableHeadItem } from './components/TableHeadItem';
import { Checkbox } from 'components/Checkbox';

import styles from './TableHead.module.scss';
import commonStyles from '../../TableCommonStyles.module.scss';

import phone from '../../../../assets/iphone12.png';

export const TableHead = () => {
  const [isShowDifferences, setIsShowDifferences] = useState<boolean>(false);

  const handleShowDifferencesClick = () => {
    setIsShowDifferences(!isShowDifferences);
  };

  return (
    <div className={styles.tableHead}>
      <div
        className={`${styles.inputWrapper} ${commonStyles.tableFirstColumn}`}
      >
        <Checkbox
          id={'differences'}
          onChange={handleShowDifferencesClick}
          isChecked={isShowDifferences}
        >
          Показать различия
        </Checkbox>
      </div>
      <ul className={commonStyles.tableItems}>
        <TableHeadItem img={phone} name={'Apple Iphone 12'} altImg={'phone'} />
        <TableHeadItem img={phone} name={'Apple Iphone 12'} altImg={'phone'} />
        <TableHeadItem img={phone} name={'Apple Iphone 12'} altImg={'phone'} />
      </ul>
    </div>
  );
};
