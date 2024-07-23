import { useEffect, useState } from 'react';
import './header.css';

import SearchForm from '../searchForm/searchFrom';
import { HeaderProps } from '../../shared/types';

export default function Header(props: HeaderProps) {
    const [newError, setNewError] = useState(false);

    useEffect(() => {
        if (newError) {
            throw new Error('I crashed!');
        }
    }, [newError]);

    return (
        <header className="header">
            <h1 className="header__logo">Rick and Morty</h1>
            <button type="button" className="search_form__button" onClick={() => setNewError(true)}>
                Test error
            </button>
            <SearchForm handleRequest={props.handleRequest} />
        </header>
    );
}
