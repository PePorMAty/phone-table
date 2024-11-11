import style from './TableHead.module.scss';

import phone from '../../assets/iphone12.png';

const TableHead = () => {
  return (
    <div className={style.tableHead}>
      <div className={style.inputWrapper}>
        <input className={style.checkInput} type="checkbox" id="differences" />
        <label className={style.label} htmlFor="differences">
          Показать различия
        </label>
      </div>
      <div className={style.itemWrapper}>
        <img className={style.img} src={phone} alt="phone" />
        <p className={style.name}>Apple iPhone 12</p>
      </div>
      <div className={style.itemWrapper}>
        <img className={style.img} src={phone} alt="phone" />
        <p className={style.name}>Apple iPhone 12</p>
      </div>
      <div className={style.itemWrapper}>
        <img className={style.img} src={phone} alt="phone" />
        <p className={style.name}>Apple iPhone 12</p>
      </div>
    </div>
  );
};

export default TableHead;
