import style from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
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
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
