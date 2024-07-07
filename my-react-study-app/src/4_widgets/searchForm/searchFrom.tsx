/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component } from 'react';
import './searchForm.css';
import { HeaderProps } from '../../7_shared/types';

class SearchForm extends Component<HeaderProps> {
    state = {
        newRequest: '',
    };

    constructor(props: HeaderProps) {
        super(props);
    }

    handleNewRequestChange(newMemRequest: string) {
        this.setState({
            newRequest: newMemRequest,
        });
    }

    render() {
        return (
            <form className="search_form">
                <input
                    className="search_form__input"
                    placeholder="search..."
                    onChange={(e) => this.handleNewRequestChange(e.target.value)}
                />
                <button
                    type="submit"
                    className="search_form__button"
                    onClick={() => this.props.handleRequest(this.state.newRequest)}
                >
                    Search
                </button>
            </form>
        );
    }
}

export default SearchForm;
