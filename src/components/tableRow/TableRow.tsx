import style from './TableRow.module.scss';

export const TableRow = () => {
  return (
    <div className={style.tableRow}>
      <div className={style.cellWrapper}>
        <p className={style.cellTitle}>Производитель</p>
        <p className={style.cell}>Apple</p>
        <p className={style.cell}>Apple</p>
        <p className={style.cell}>Apple</p>
      </div>
    </div>
  );
};
