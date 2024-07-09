import { Component } from 'react';
import './mainSection.css';
// import getRequestFropApi from '../../5_features/apiRequests';
import { MainSectionProps, BookRequest, CharecterRequest, HouseRequest } from '../../7_shared/types';

class MainSection extends Component<MainSectionProps> {
    render() {
        return (
            <main className="main">
                <div className="main__wrapper">
                    {this.props.header === '' &&
                        Object.entries(this.props.items).map((item, index) => {
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>
                                        {item[0]} - {item[1]}
                                    </p>
                                </div>
                            );
                        })}
                    {this.props.header.includes('books') &&
                        this.props.items.map((item, index) => {
                            const book = item as BookRequest;
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>book number: {index + 1}</p>
                                    <p>name: {book.name}</p>
                                    <p>author: {book.authors}</p>
                                </div>
                            );
                        })}
                    {this.props.header.includes('characters') &&
                        this.props.items.map((item, index) => {
                            const character = item as CharecterRequest;
                            return (
                                <div className="main__item" key={`${String(index)}`}>
                                    <p>character number: {index + 1}</p>
                                    <p>name: {character.name}</p>
                                    <p>aliases: {character.aliases}</p>
                                    <p>gender: {character.gender}</p>
                                </div>
                            );
                        })}
                    {this.props.header.includes('houses') &&
                        this.props.items.map((item, index) => {
                            const house = item as HouseRequest;
                            return (
                                <div className="main__item" key={`${String(index)}`}>
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
