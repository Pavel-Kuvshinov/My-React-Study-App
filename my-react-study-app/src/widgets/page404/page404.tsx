import styles from './page404.module.css';
// import { useTheme } from '../../shared/context/themeMode';

export default function NotFoundPage(): JSX.Element {
    // const { isDark } = useTheme();
    return (
        <main className={`${styles.notFound} ${styles.light}`}>
            <div className={styles.notFound__wrapper}>
                <h1 className={`${styles.notFound_title} ${styles.light}`}>Sorry, we can’t find this page</h1>
            </div>
        </main>
    );
}
