import { Component } from 'react';
import './mainSection.css';
import getRequestFropApi from '../../5_features/apiRequests';
import { MainSectionProps, BookRequest, CharecterRequest, HouseRequest } from '../../7_shared/types';

class MainSection extends Component<MainSectionProps> {
    state = {
        header: '',
        items: [],
    };

    async componentDidMount() {
        const memResult = await getRequestFropApi(this.props.currentRequest);
        if (memResult.header.includes('/')) {
            const res = new Array(memResult.result);
            this.setState({
                header: memResult.header,
                items: res,
            });
        } else {
            this.setState({
                header: memResult.header,
                items: memResult.result,
            });
        }
    }

    render() {
        return (
            <main className="main">
                <div className="main__wrapper">
                    {this.state.header === '' &&
                        Object.entries(this.state.items).map((item, index) => {
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>
                                        {item[0]} - {item[1]}
                                    </p>
                                </div>
                            );
                        })}
                    {this.state.header.includes('books') &&
                        this.state.items.map((item, index) => {
                            const book = item as BookRequest;
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>url: {book.url}</p>
                                    <p>book number: {index + 1}</p>
                                    <p>book: {book.name}</p>
                                    <p>author: {book.authors}</p>
                                </div>
                            );
                        })}
                    {this.state.header.includes('characters') &&
                        this.state.items.map((item, index) => {
                            const character = item as CharecterRequest;
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>url: {character.url}</p>
                                    <p>character number: {index + 1}</p>
                                    <p>aliases: {character.aliases}</p>
                                    <p>gender: {character.gender}</p>
                                    <p>name: {character.name}</p>
                                </div>
                            );
                        })}
                    {this.state.header.includes('houses') &&
                        this.state.items.map((item, index) => {
                            const house = item as HouseRequest;
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>url: {house.url}</p>
                                    <p>house number: {index + 1}</p>
                                    <p>name: {house.name}</p>
                                    <p>region: {house.region}</p>
                                    <p>coat of arms: {house.coatOfArms}</p>
                                </div>
                            );
                        })}
                </div>
            </main>
        );
    }
}

export default MainSection;
