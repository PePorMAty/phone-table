import { NavLink } from 'react-router-dom';

import { PageContainer } from 'components/PageContainer';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const createActiveClassName = (isActive: boolean) => {
    let className = styles.item;

    if (isActive) {
      className = `${styles.item} ${styles.active}`;
    }

    return className;
  };

  return (
    <nav className={styles.nav}>
      <PageContainer>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) => createActiveClassName(isActive)}
              to="/comparison/phone"
            >
              Смартфоны
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => createActiveClassName(isActive)}
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
