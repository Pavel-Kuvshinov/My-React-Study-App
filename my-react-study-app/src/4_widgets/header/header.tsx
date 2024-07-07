/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component } from 'react';
import './header.css';

import SearchForm from '../searchForm/searchFrom';
import { HeaderProps } from '../../7_shared/types';

class Header extends Component<HeaderProps> {
    state = {
        error: false,
    };

    constructor(props: HeaderProps) {
        super(props);
    }

    handleClickError = () => {
        this.setState({
            error: true,
        });
    };

    render() {
        if (this.state.error === true) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return (
            <header className="header">
                <h1 className="header__logo">Ice and Fire</h1>
                <button type="button" className="search_form__button" onClick={this.handleClickError}>
                    Error
                </button>
                <SearchForm handleRequest={this.props.handleRequest} />
            </header>
        );
    }
}

export default Header;
