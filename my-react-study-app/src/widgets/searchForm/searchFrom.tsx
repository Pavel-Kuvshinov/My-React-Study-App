import { useState } from 'react';

import { HeaderProps } from '../../shared/types';
import './searchForm.css';

export default function SearchForm(props: HeaderProps) {
    const [newRequest, setNewRequest] = useState('');
    const { handleRequest } = props;

    return (
        <form
            className="search_form"
            onSubmit={(e) => {
                e.preventDefault();
                handleRequest(newRequest);
            }}
        >
            <input
                className="search_form__input"
                placeholder="search..."
                onChange={(e) => setNewRequest(e.target.value)}
            />
            <button type="submit" className="search_form__button">
                Search
            </button>
        </form>
    );
}
