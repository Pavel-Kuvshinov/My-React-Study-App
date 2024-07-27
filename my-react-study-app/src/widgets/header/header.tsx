import { useEffect, useState } from 'react';
import './header.css';

import { useTheme } from '@/shared/context/themeMode';
import SearchForm from '../searchForm/searchFrom';
import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';

import brightness from '../../shared/assets/brightness-icon.svg';
import moon from '../../shared/assets/moon-icon.svg';

export default function Header() {
    const [newError, setNewError] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { setStartСondition } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (newError) {
            throw new Error('I crashed!');
        }
    }, [newError]);

    return (
        <header className={isDark ? 'header dark' : 'header light'}>
            <button
                type="button"
                className={isDark ? 'header__logo dark' : 'header__logo light'}
                onClick={() => dispatch(setStartСondition(''))}
            >
                Rick and Morty
            </button>
            <button
                type="button"
                className={isDark ? 'search_form__button dark' : 'search_form__button light'}
                onClick={() => setNewError(true)}
            >
                Test error
            </button>
            <SearchForm />
            <button
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
