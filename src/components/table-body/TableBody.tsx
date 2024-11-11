import TableRow from '../table-row/TableRow';

import style from './TableBody.module.scss';

const TableBody = () => {
  return (
    <div className={style.tableBody}>
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};

export default TableBody;
