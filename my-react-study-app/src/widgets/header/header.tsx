/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useState } from 'react';
import './header.css';

import SearchForm from '../searchForm/searchFrom';
import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';

/* eslint-disable import/no-absolute-path */
import brightness from '../../shared/assets/brightness-icon.svg';
import moon from '../../shared/assets/moon-icon.svg';
/* eslint-enable import/no-absolute-path */

export default function Header() {
    const [newError, setNewError] = useState(false);

    const { setStartСondition } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (newError) {
            throw new Error('I crashed!');
        }
    }, [newError]);

    return (
        <header className="header">
            <button type="button" className="header__logo" onClick={() => dispatch(setStartСondition(''))}>
                Rick and Morty
            </button>
            <button type="button" className="search_form__button" onClick={() => setNewError(true)}>
                Test error
            </button>
            <SearchForm />
            <button type="button" className="theme__button">
                <svg className="theme__button-icon">
                    <use xlinkHref={`${brightness}#brightness-icon`} />
                </svg>
            </button>
        </header>
    );
}
