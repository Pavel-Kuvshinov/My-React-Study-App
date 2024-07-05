/* eslint-disable react/prefer-stateless-function */

import { Component } from 'react';
import './searchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <form className="search_form">
                <input className="search_form__input" placeholder="search..." />
                <button type="submit" className="search_form__button">
                    Search
                </button>
            </form>
        );
    }
}

export default SearchForm;
