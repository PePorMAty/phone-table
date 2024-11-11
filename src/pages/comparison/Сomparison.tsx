import TableBody from '../../components/table-body/TableBody';
import TableHead from '../../components/table-head/TableHead';

import style from './Comparison.module.scss';

const Сomparison = () => {
  return (
    <div>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Смартфоны</h2>
        <div className={style.pagination}>Отобразить товары 2 3 4 5 6</div>
      </div>
      <TableHead />
      <TableBody />
    </div>
  );
};

export default Сomparison;
