import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import './header.css';

import { useTheme } from '@/shared/context/themeMode';
import SearchForm from '../searchForm/searchFrom';
import { useAppDispatch } from '../../shared/store/store';
import brightness from '../../shared/assets/brightness-icon.svg';
import moon from '../../shared/assets/moon-icon.svg';

export default function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={isDark ? 'header dark' : 'header light'}>
            <Link to="/" data-testid="logo-link" className={isDark ? 'header__logo dark' : 'header__logo light'}>
                Rick & Morty
            </Link>
            <SearchForm />
            <button
                data-testid="button-theme"
                type="button"
                className={isDark ? 'theme__button dark' : 'theme__button light'}
                onClick={toggleTheme}
            >
                <svg className="theme__button-icon">
                    <use xlinkHref={isDark ? `${brightness}#brightness-icon` : `${moon}#moon-icon`} />
                </svg>
            </button>
        </header>
    );
}
