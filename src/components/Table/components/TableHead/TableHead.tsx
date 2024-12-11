import styles from './TableHead.module.scss';
import commonStyles from '../../TableCommonStyles.module.scss';

import phone from '../../../../assets/iphone12.png';
import { TableHeadItem } from './components/TableHeadItem';

export const TableHead = () => {
  return (
    <div className={styles.tableHead}>
      <div
        className={`${styles.inputWrapper} ${commonStyles.tableFirstColumn}`}
      >
        <input className={styles.checkInput} type="checkbox" id="differences" />
        <label className={styles.label} htmlFor="differences">
          Показать различия
        </label>
      </div>
      <ul className={commonStyles.tableItems}>
        <TableHeadItem img={phone} name={'Apple Iphone 12'} altImg={'phone'} />
        <TableHeadItem img={phone} name={'Apple Iphone 12'} altImg={'phone'} />
        <TableHeadItem img={phone} name={'Apple Iphone 12'} altImg={'phone'} />
      </ul>
    </div>
  );
};
