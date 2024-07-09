import { Component } from 'react';

class ErrorSection extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__wrapper">
                    <p className="main__item_text-bigger">Something went wrong.</p>
                    <p className="main__item_text-bigger">If you want, you can try to search something else...</p>
                    <p className="main__item_text-bigger">
                        For searching first please type &quot;category&quot; in the search field and then type
                        &quot;name&quot; of the item...
                    </p>
                </div>
            </main>
        );
    }
}

export default ErrorSection;
