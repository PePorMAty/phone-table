import { ProfileIcon } from '../../../../assets/icons';

import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <a className={style.mainLink} href="#">
          Каталог
        </a>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.item}>
              <a href="#" className={style.link}>
                СРАВНЕНИЕ
              </a>
            </li>
            <li className={style.item}>
              <a href="#" className={style.linkWithIcon}>
                Личный кабинет
                <ProfileIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
