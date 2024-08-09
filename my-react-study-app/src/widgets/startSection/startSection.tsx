import { Link } from '@remix-run/react';
import { useAppDispatch } from '../../shared/store/store';
import './startSection.css';
import { useTheme } from '../../shared/context/themeMode';

export default function StartSection() {
    const { isDark } = useTheme();

    return (
        <main className={isDark ? 'main dark' : 'main'}>
            <div className="main__wrapper">
                <div className="start__content">
                    <div className="start__items">
                        <Link to="character?page=1&name=" className={isDark ? 'start__item dark' : 'start__item light'}>
                            character
                        </Link>
                        <Link to="episode?page=1&name=" className={isDark ? 'start__item dark' : 'start__item light'}>
                            episode
                        </Link>
                        <Link to="location?page=1&name=" className={isDark ? 'start__item dark' : 'start__item light'}>
                            location
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
