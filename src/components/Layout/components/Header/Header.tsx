import { NavLink } from 'react-router-dom';

import { ProfileIcon } from '../../../../assets/icons';
import { PageContainer } from '../../../PageContainer';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <PageContainer>
        <div className={styles.wrapper}>
          <NavLink className={styles.mainLink} to={'/'}>
            Каталог
          </NavLink>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.item}>
                <NavLink to="/comparison" className={styles.link}>
                  СРАВНЕНИЕ
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/" className={styles.linkWithIcon}>
                  Личный кабинет
                  <ProfileIcon />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
};
