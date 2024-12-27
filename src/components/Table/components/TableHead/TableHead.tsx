import { useState } from 'react';

import { PhoneType } from 'store/models/phone/phone';
import { Checkbox } from 'components/Checkbox';

import { TableHeadItem } from './components/TableHeadItem';

import commonStyles from '../../TableCommonStyles.module.scss';
import styles from './TableHead.module.scss';

interface TableHeadPropsType {
  tableData: PhoneType[];
}

export const TableHead = ({ tableData }: TableHeadPropsType) => {
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
        {tableData?.map((phone) => (
          <TableHeadItem
            key={phone.id}
            img={phone.image}
            name={phone.name}
            altImg={phone.name}
          />
        ))}
      </ul>
    </div>
  );
};
