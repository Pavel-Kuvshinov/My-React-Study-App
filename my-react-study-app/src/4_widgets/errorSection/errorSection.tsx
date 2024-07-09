import { Component } from 'react';

class ErrorSection extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__wrapper">
                    <p className="main__item_text-bigger">Something went wrong.</p>
                    <p className="main__item_text-bigger">If you want, you can try to search something else...</p>
                    <p className="main__item_text-bigger">
                        For searching something first of all please type an empty request in the search field and sent
                        it.
                    </p>
                    <p className="main__item_text-bigger">
                        Then you can choose a category. For example: &quot;books&quot; or &quot;houses&quot;
                    </p>
                    <p className="main__item_text-bigger">
                        Then you can choose an item of the category by typing name of the item. For example: &quot;A
                        Game of Thrones&quot; or &quot;House Algood&quot;.
                    </p>
                </div>
            </main>
        );
    }
}

export default ErrorSection;
