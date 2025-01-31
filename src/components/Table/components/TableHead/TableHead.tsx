import { PhoneType } from 'store/models/phone/phone';
import { Checkbox } from 'components/Checkbox';

import { TableHeadItem } from './components/TableHeadItem';

import commonStyles from '../../TableCommonStyles.module.scss';
import styles from './TableHead.module.scss';

interface TableHeadProps {
  data: PhoneType[];
  replacingItems: PhoneType[];
  isShowDifferences: boolean;
  setIsShowDifferences: (value: boolean) => void;
  replacePhone: (payload: { id: number; cardId: number }) => void;
}

export const TableHead = ({
  data,
  isShowDifferences,
  setIsShowDifferences,
  replacingItems,
  replacePhone,
}: TableHeadProps) => {
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
        {data?.map(({ id, image, name }) => (
          <TableHeadItem
            key={id}
            img={image}
            name={name}
            altImg={name}
            replacingItems={replacingItems}
            id={id}
            replacePhone={replacePhone}
          />
        ))}
      </ul>
    </div>
  );
};
