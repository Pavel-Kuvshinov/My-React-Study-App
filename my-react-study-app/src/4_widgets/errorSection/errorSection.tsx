import { Component } from 'react';

class ErrorSection extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__wrapper">
                    <p className="main__item_text-bigger">Something went wrong.</p>
                    <p className="main__item_text-bigger">If you want, you can try to search something...</p>
                </div>
            </main>
        );
    }
}

export default ErrorSection;
