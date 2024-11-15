import { ProfileIcon } from '../../assets/icons';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <a className={style.mainLink} href="#">
          Каталог
        </a>
        <ul className={style.navMenu}>
          <li className={style.navMenu__link}>
            <a href="#">СРАВНЕНИЕ</a>
          </li>
          <li className={`${style.navMenu__link} ${style.profileLink}`}>
            <a href="#">Личный кабинет</a>
            <a href="#">
              <ProfileIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
