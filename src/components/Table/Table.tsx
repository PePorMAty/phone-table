import { PhoneType } from 'store/models/phone/phone';

import { TableBody } from './components/TableBody';
import { TableHead } from './components/TableHead';
import { TableTitle } from './components/TableTitle';

import styles from './Table.module.scss';

interface TablePropsType {
  data: PhoneType[];
}

export const Table = ({ data }: TablePropsType) => {
  return (
    <>
      <TableTitle />
      <div className={styles.table}>
        <TableHead tableData={data} />
        <TableBody />
      </div>
    </>
  );
};
