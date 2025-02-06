import { Link, NavLink } from 'react-router-dom'

import { PageContainer } from 'components/PageContainer'

import styles from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <PageContainer>
                <ul className={styles.list}>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : styles.item} to='/'>Смартфоны</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : styles.item} to='/videoCardComparison'>Видеокарты</NavLink>
                    </li>
                </ul>
            </PageContainer>
        </nav>
    )
}