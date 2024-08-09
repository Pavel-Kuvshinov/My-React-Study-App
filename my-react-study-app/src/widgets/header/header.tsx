import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import './header.css';

import { useTheme } from '@/shared/context/themeMode';
import SearchForm from '../searchForm/searchFrom';
import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';

import brightness from '../../shared/assets/brightness-icon.svg';
import moon from '../../shared/assets/moon-icon.svg';

export interface HeaderProps {
    section: string;
}

export default function Header({ section }: HeaderProps) {
    const { isDark, toggleTheme } = useTheme();
    const { setStartСondition, setError } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <header className={isDark ? 'header dark' : 'header light'}>
            <Link to="/" className={isDark ? 'header__logo dark' : 'header__logo light'}>
                Rick and Morty
            </Link>
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
