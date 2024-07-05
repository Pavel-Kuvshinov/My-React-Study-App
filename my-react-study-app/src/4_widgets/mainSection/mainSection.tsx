import { Component } from 'react';
import './mainSection.css';
import getRequestFropApi from '../../5_features/apiRequests';
import { BasicRequest } from '../../7_shared/types';

class MainSection extends Component {
    state = {
        items: [] as string[],
        itemsLinks: [] as string[],
    };

    async componentDidMount() {
        const memResult: BasicRequest = await getRequestFropApi('/');
        this.setState({
            items: Object.keys(memResult),
            itemsLinks: Object.values(memResult),
        });
    }

    render() {
        return (
            <main className="main">
                <div className="main__wrapper">
                    {this.state.items.map((item, index) => {
                        return (
                            <p className="main__items" key={`${String(index)}`}>
                                {item} - {this.state.itemsLinks[index]}
                            </p>
                        );
                    })}
                </div>
            </main>
        );
    }
}

export default MainSection;
