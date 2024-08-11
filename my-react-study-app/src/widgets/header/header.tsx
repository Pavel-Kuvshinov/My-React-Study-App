import { Link } from '@remix-run/react';
import './header.css';

import { useTheme } from '../../shared/context/themeMode';
import SearchForm from '../searchForm/searchFrom';
import brightness from '../../shared/assets/brightness-icon.svg';
import moon from '../../shared/assets/moon-icon.svg';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={`header ${isDark ? 'dark' : 'light'}`}>
            <Link to="/" data-testid="logo-link" className={`header__logo ${isDark ? 'dark' : 'light'}`}>
                Rick & Morty
            </Link>
            <SearchForm />
            <button
                data-testid="button-theme"
                type="button"
                className={`theme__button ${isDark ? 'dark' : 'light'}`}
                onClick={toggleTheme}
            >
                <svg className="theme__button-icon">
                    <use xlinkHref={isDark ? `${brightness}#brightness-icon` : `${moon}#moon-icon`} />
                </svg>
            </button>
        </header>
    );
}
