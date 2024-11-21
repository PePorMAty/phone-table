import { TableRow } from './components/TableRow';

import style from './TableBody.module.scss';

export const TableBody = () => {
  return (
    <div className={style.tableBody}>
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};
