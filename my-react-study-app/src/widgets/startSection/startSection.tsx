import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';
import './startSection.css';
import { useTheme } from '../../shared/context/themeMode';

export default function StartSection() {
    const { isDark } = useTheme();
    const { setSection } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <main className={isDark ? 'main dark' : 'main light'}>
            <div className="main__wrapper">
                <div className="main__content">
                    <div className="main__search_section">
                        <div className="main__items">
                            <button
                                type="button"
                                className={isDark ? 'start__item dark' : 'start__item light'}
                                onClick={() => dispatch(setSection('character'))}
                            >
                                character
                            </button>
                            <button
                                type="button"
                                className={isDark ? 'start__item dark' : 'start__item light'}
                                onClick={() => dispatch(setSection('episode'))}
                            >
                                episode
                            </button>
                            <button
                                type="button"
                                className={isDark ? 'start__item dark' : 'start__item light'}
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
