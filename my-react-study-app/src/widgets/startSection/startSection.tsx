import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';
import './startSection.css';

export default function StartSection() {
    const { setSection } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__content">
                    <div className="main__search_section">
                        <div className="main__items">
                            <button
                                type="button"
                                className="start__item"
                                onClick={() => dispatch(setSection('character'))}
                            >
                                character
                            </button>
                            <button
                                type="button"
                                className="start__item"
                                onClick={() => dispatch(setSection('episode'))}
                            >
                                episode
                            </button>
                            <button
                                type="button"
                                className="start__item"
                                onClick={() => dispatch(setSection('location'))}
                            >
                                location
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
