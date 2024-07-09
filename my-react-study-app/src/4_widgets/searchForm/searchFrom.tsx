import { Component } from 'react';
import './searchForm.css';
import { HeaderProps } from '../../7_shared/types';

class SearchForm extends Component<HeaderProps> {
    state = {
        newRequest: '',
    };

    handleNewRequestChange = (newMemRequest: string) => {
        this.setState({
            newRequest: newMemRequest,
        });
    };

    render() {
        return (
            <form
                className="search_form"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleRequest(this.state.newRequest);
                }}
            >
                <input
                    className="search_form__input"
                    placeholder="search..."
                    onChange={(e) => this.handleNewRequestChange(e.target.value)}
                />
                <button type="submit" className="search_form__button">
                    Search
                </button>
            </form>
        );
    }
}

export default SearchForm;
