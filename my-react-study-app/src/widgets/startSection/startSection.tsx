import styles from './startSection.module.css';
import { useTheme } from '../../shared/context/themeMode';
import { usePathname, useRouter } from 'next/navigation';

export default function StartSection() {
    const { isDark } = useTheme();
    const pathname = usePathname();
    const router = useRouter();

    const updateQueryParams = (section: string) => {
        router.push(`${pathname}?section=${section}&page=1`);
    };

    return (
        <main className={isDark ? `${styles.main} ${styles.dark}` : `${styles.main} ${styles.light}`}>
            <div className={styles.main__wrapper}>
                <div className={styles.main__content}>
                    <div className={styles.main__search_section}>
                        <div className={styles.main__items}>
                            <button
                                type="button"
                                className={
                                    isDark
                                        ? `${styles.start__item} ${styles.dark}`
                                        : `${styles.start__item} ${styles.light}`
                                }
                                onClick={() => updateQueryParams('character')}
                            >
                                character
                            </button>
                            <button
                                type="button"
                                className={
                                    isDark
                                        ? `${styles.start__item} ${styles.dark}`
                                        : `${styles.start__item} ${styles.light}`
                                }
                                onClick={() => updateQueryParams('episode')}
                            >
                                episode
                            </button>
                            <button
                                type="button"
                                className={
                                    isDark
                                        ? `${styles.start__item} ${styles.dark}`
                                        : `${styles.start__item} ${styles.light}`
                                }
                                onClick={() => updateQueryParams('location')}
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
