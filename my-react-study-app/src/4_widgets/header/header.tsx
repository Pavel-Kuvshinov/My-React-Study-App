/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import './header.css';

import SearchForm from '../searchForm/searchFrom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__logo">Ice and Fire</h1>
                <SearchForm />
            </header>
        );
    }
}

export default Header;
