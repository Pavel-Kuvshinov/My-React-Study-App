import { useTheme } from '../../shared/context/themeMode';
import './notFoundPage.css';

export default function NotFoundPage(): JSX.Element {
    const { isDark } = useTheme();
    return (
        <main className={isDark ? 'notFound dark' : 'notFound light'}>
            <div className="notFound__wrapper">
                <h1 className={isDark ? 'notFound-title dark' : 'notFound-title light'}>
                    Sorry, we can’t find this page
                </h1>
            </div>
        </main>
    );
}
