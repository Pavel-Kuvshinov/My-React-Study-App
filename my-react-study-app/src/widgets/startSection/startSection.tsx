import styles from './startSection.module.css';
import { useAppDispatch } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useTheme } from '../../shared/context/themeMode';

export default function StartSection() {
    const { isDark } = useTheme();
    const { setSection } = itemsSlice.actions;
    const dispatch = useAppDispatch();

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
                                onClick={() => dispatch(setSection('character'))}
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
                                onClick={() => dispatch(setSection('episode'))}
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
