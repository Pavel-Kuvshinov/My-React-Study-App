import styles from './header.module.css';
import { useTheme } from '../../shared/context/themeMode';
import SearchForm from '../searchForm/searchFrom';
import { usePathname, useRouter } from 'next/navigation';

// import Brightness from '../../../src/shared/assets/brightness.svg';
// import Moon from '../../../src/shared/assets/moon.svg';

export interface HeaderProps {
    section: string;
}

export default function Header({ section }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={isDark ? `${styles.header} ${styles.dark}` : `${styles.header} ${styles.light}`}>
            <button
                type="button"
                className={isDark ? `${styles.header__logo} ${styles.dark}` : `${styles.header__logo} ${styles.light}`}
                onClick={() => {
                    console.log('click');
                    router.push(`${pathname}`);
                }}
            >
                Rick and Morty
            </button>
            {/* <button
                type="button"
                className={isDark ? 'search_form__button dark' : 'search_form__button light'}
                onClick={() => setError(true)}
            >
                Test error
            </button> */}
            <SearchForm section={section} />
            <button
                data-testid="button-theme"
                type="button"
                className={
                    isDark ? `${styles.theme__button} ${styles.dark}` : `${styles.theme__button} ${styles.light}`
                }
                onClick={() => {
                    toggleTheme();
                    document.body.classList.toggle('isDark');
                }}
            >
                {/* {isDark ? (
                    <Brightness className={styles.theme__button_icon} />
                ) : (
                    <Moon className={styles.theme__button_icon} />
                )} */}
            </button>
        </header>
    );
}
