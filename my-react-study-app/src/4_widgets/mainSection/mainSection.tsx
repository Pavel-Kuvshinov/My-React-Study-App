import { Outlet, NavLink, useSearchParams } from 'react-router-dom';

import './mainSection.css';
import { CharecterRequest, EpisodeRequest, LocationRequest, MainSectionProps } from '../../7_shared/types';
import Pagination from '../pagination/pagination';

export default function MainSection(props: MainSectionProps) {
    const { header, items, info, handleRequest } = props;
    const [, setSearchParams] = useSearchParams();

    const changePage = (page: number) => {
        setSearchParams({ page: page.toString() });
    };

    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__content">
                    <div className="main__search_section">
                        <div className="main__items">
                            {Object.keys(info).length !== 0 && (
                                <Pagination info={info} handleRequest={handleRequest} onClick={changePage} />
                            )}
                            {header === '' &&
                                items.map((item, index) => {
                                    const elem = item as [string, string];
                                    return (
                                        <div className="main__item" key={`${String(index)}`}>
                                            <p className="main__item_text">{elem[0].slice(0, -1)}</p>
                                        </div>
                                    );
                                })}
                            {header.includes('location') &&
                                items.map((item, index) => {
                                    const location = item as LocationRequest;
                                    return (
                                        <NavLink
                                            to={`location/detail/${location.id}`}
                                            className="main__item"
                                            key={`${String(index)}`}
                                        >
                                            <p>name: {location.name}</p>
                                        </NavLink>
                                    );
                                })}
                            {header.includes('character') &&
                                items.map((item, index) => {
                                    const character = item as CharecterRequest;
                                    return (
                                        <NavLink
                                            to={`character/detail/${character.id}`}
                                            className="main__item"
                                            key={`${String(index)}`}
                                        >
                                            <p>name: {character.name}</p>
                                        </NavLink>
                                    );
                                })}
                            {header.includes('episode') &&
                                items.map((item, index) => {
                                    const episode = item as EpisodeRequest;
                                    return (
                                        <NavLink
                                            to={`episode/detail/${episode.id}`}
                                            className="main__item"
                                            key={`${String(index)}`}
                                        >
                                            <p>name: {episode.name}</p>
                                        </NavLink>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="main__detailed_section">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
}
