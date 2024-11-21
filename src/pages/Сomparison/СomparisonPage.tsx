import { PageContainer } from '../../components/PageContainer';
import { TableBody } from '../../components/TableBody';
import { TableHead } from '../../components/TableHead';

import style from './ComparisonPage.module.scss';

export const ComparisonPage = () => {
  return (
    <PageContainer>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Смартфоны</h2>
        <div className={style.select}>Отобразить товары 2 3 4 5 6</div>
      </div>
      <TableHead />
      <TableBody />
    </PageContainer>
  );
};
