import { TableRowItem } from './components/TableRowItem';

import styles from './TableRow.module.scss';
import commonStyles from '../../../../TableCommonStyles.module.scss';

interface TableRowProps {
  title?: string;
}

export const TableRow = ({ title }: TableRowProps) => {
  return (
    <div className={`${styles.cellWrapper} ${commonStyles.tableItems}`}>
      <p className={`${styles.cellTitle} ${commonStyles.tableFirstColumn}`}>
        {title}
      </p>
      <TableRowItem name="Apple" />
      <TableRowItem name="Apple" />
      <TableRowItem name="Apple" />
    </div>
  );
};
