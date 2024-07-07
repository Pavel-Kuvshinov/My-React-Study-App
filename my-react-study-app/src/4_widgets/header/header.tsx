import { Component } from 'react';
import './header.css';

import SearchForm from '../searchForm/searchFrom';
import { HeaderProps } from '../../7_shared/types';

class Header extends Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props) as unknown as HeaderProps;
    }

    render() {
        return (
            <header className="header">
                <h1 className="header__logo">Ice and Fire</h1>
                <SearchForm handleRequest={this.props.handleRequest} />
            </header>
        );
    }
}

export default Header;
