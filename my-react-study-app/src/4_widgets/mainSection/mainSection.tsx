import './mainSection.css';
import { CharecterRequest, EpisodeRequest, LocationRequest, MainSectionProps } from '../../7_shared/types';

export default function MainSection(props: MainSectionProps) {
    const { header, items } = props;
    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__content">
                    <div className="main__search_section">
                        <div className="main__items">
                            {header === '' &&
                                items.map((item, index) => {
                                    const elem = item as [string, string];
                                    return (
                                        <div className="main__item" key={`${String(index)}`}>
                                            <p>
                                                {elem[0].slice(0, -1)} - {elem[1]}
                                            </p>
                                        </div>
                                    );
                                })}
                            {header.includes('location') &&
                                items.map((item, index) => {
                                    const location = item as LocationRequest;
                                    return (
                                        <div className="main__item" key={`${String(index)}`}>
                                            <p>name: {location.name}</p>
                                        </div>
                                    );
                                })}
                            {header.includes('character') &&
                                items.map((item, index) => {
                                    const character = item as CharecterRequest;
                                    return (
                                        <div className="main__item" key={`${String(index)}`}>
                                            <p>name: {character.name}</p>
                                        </div>
                                    );
                                })}
                            {header.includes('episode') &&
                                items.map((item, index) => {
                                    const episode = item as EpisodeRequest;
                                    return (
                                        <div className="main__item" key={`${String(index)}`}>
                                            <p>name: {episode.name}</p>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="main__pagination" />
                    </div>
                    <div className="main__detailes_section">
                        <div />
                    </div>
                </div>
            </div>
        </main>
    );
}
