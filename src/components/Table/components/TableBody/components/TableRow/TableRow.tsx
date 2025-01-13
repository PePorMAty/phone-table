import { TableRowItem } from './components/TableRowItem';

import styles from './TableRow.module.scss';
import commonStyles from '../../../../TableCommonStyles.module.scss';

interface TableRowProps {
  title: string;
  chars: (string | number | boolean)[];
}

export const TableRow = ({ title, chars }: TableRowProps) => {
  return (
    <div className={`${styles.cellWrapper} ${commonStyles.tableItems}`}>
      <p className={`${styles.cellTitle} ${commonStyles.tableFirstColumn}`}>
        {title}
      </p>
      {chars?.map((char, index) => <TableRowItem key={index} name={char} />)}
    </div>
  );
};
