import { TableBody } from '../../components/tableBody';
import { TableHead } from '../../components/tableHead';

import style from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  return (
    <div>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Смартфоны</h2>
        <div className={style.select}>Отобразить товары 2 3 4 5 6</div>
      </div>
      <TableHead />
      <TableBody />
    </div>
  );
};
