import { Component } from 'react';
import './loader.css';

class Loader extends Component {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="loader-inner" />
                </div>
            </div>
        );
    }
}

export default Loader;
