import { useContext } from 'react';
import Link from 'next/link';
import DataContext from '../../contexts/DataContext';
import s from './styles.module.css';

const Navbar = () => {
    const { navbarItems } = useContext(DataContext);

    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                {navbarItems.map((item) => (
                    <li className={s.navItem} key={item.name}>
                        <Link href={item.path}>
                            <a className={s.navLink}>
                                {item.name}
                            </a>
                        </Link>

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;