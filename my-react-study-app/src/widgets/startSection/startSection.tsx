import { Link } from '@remix-run/react';
import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';
import './startSection.css';
import { useTheme } from '../../shared/context/themeMode';

export default function StartSection() {
    const { isDark } = useTheme();
    const { setSection } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <main className={isDark ? 'main dark' : 'main'}>
            <div className="main__wrapper">
                <div className="start__content">
                    <div className="start__items">
                        <Link to="character" className={isDark ? 'start__item dark' : 'start__item light'}>
                            character
                        </Link>
                        <Link to="episode" className={isDark ? 'start__item dark' : 'start__item light'}>
                            episode
                        </Link>
                        <Link to="location" className={isDark ? 'start__item dark' : 'start__item light'}>
                            location
                        </Link>
                        {/* <button
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
                            </button> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
