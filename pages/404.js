import Navbar from '../components/Navbar/Navbar';
import { navbarItems } from '../navbarData';
import DataProvider from '../contexts/DataProvider';
import s from './styles.module.css';

export default function Custom404() {
    return (
        <DataProvider data='' navbarItems={navbarItems}>
            <div>
                <Navbar />
                <h1 className={s.h1}>404 - Page Not Found</h1>
            </div>
        </DataProvider>
    );
}