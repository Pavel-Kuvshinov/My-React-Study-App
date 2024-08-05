import styles from './header.module.css';

import { useTheme } from '../../shared/context/themeMode';
import SearchForm from '../searchForm/searchFrom';
import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';

// import brightness from '../../shared/assets/brightness-icon.svg';
// import moon from '../../shared/assets/moon-icon.svg';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();
    const { setStartСondition } = itemsSlice.actions;
    // const { setStartСondition, setError } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <header className={isDark ? `${styles.header} ${styles.dark}` : `${styles.header} ${styles.light}`}>
            <button
                type="button"
                className={isDark ? `${styles.header__logo} ${styles.dark}` : `${styles.header__logo} ${styles.light}`}
                onClick={() => dispatch(setStartСondition(''))}
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
            <SearchForm />
            <button
                data-testid="button-theme"
                type="button"
                className={
                    isDark ? `${styles.theme__button} ${styles.dark}` : `${styles.theme__button} ${styles.light}`
                }
                onClick={toggleTheme}
            >
                {/* <svg className="theme__button-icon">
                    <use xlinkHref={isDark ? `${brightness}#brightness-icon` : `${moon}#moon-icon`} />
                </svg> */}
            </button>
        </header>
    );
}
