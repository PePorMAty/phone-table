import { ProfileIcon } from '../../../../assets/icons';
import { PageContainer } from '../../../PageContainer';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <PageContainer>
        <div className={styles.wrapper}>
          <a className={styles.mainLink} href="/#">
            Каталог
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.item}>
                <a href="/#" className={styles.link}>
                  СРАВНЕНИЕ
                </a>
              </li>
              <li className={styles.item}>
                <a href="/#" className={styles.linkWithIcon}>
                  Личный кабинет
                  <ProfileIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
};
