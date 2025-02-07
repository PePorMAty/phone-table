import { NavLink } from 'react-router-dom';

import { PageContainer } from 'components/PageContainer';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <PageContainer>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.active}` : styles.item
              }
              to="/comparison/phone"
            >
              Смартфоны
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.active}` : styles.item
              }
              to="/comparison/videoCard"
            >
              Видеокарты
            </NavLink>
          </li>
        </ul>
      </PageContainer>
    </nav>
  );
};
