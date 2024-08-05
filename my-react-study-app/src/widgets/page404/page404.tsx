import styles from './page404.module.css';
// import { useTheme } from '../../shared/context/themeMode';

export default function NotFoundPage(): JSX.Element {
    // const { isDark } = useTheme();
    const isDark = true;
    return (
        <main className={isDark ? `${styles.notFound} ${styles.dark}` : `${styles.notFound} ${styles.light}`}>
            <div className={styles.notFound__wrapper}>
                <h1
                    className={
                        isDark ? `${styles.notFound_title} ${styles.dark}` : `${styles.notFound_title} ${styles.light}`
                    }
                >
                    Sorry, we can’t find this page
                </h1>
            </div>
        </main>
    );
}
