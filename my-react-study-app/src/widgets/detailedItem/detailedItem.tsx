import styles from './detailedItem.module.css';

import { useEffect } from 'react';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import Loader from '../loader/loader';
import { useTheme } from '../../shared/context/themeMode';

export default function DetailedItem() {
    const { isDark } = useTheme();
    const { currentId, section, loadingCard } = useAppSelector((state) => state.items);
    const { setCurrentId, setLoadingCard } = itemsSlice.actions;
    const detailedItemParams = {
        section,
        id: currentId,
    };
    const dispatch = useAppDispatch();
    const { data } = itemsApi.useGetItemQuery(detailedItemParams);

    useEffect(() => {
        if (data) {
            dispatch(setLoadingCard(false));
        }
    }, [data]);

    return (
        <div
            className={styles.main__detailed_section}
            onClick={(e) => {
                const elem = e.target as HTMLElement;
                if (elem.classList.contains('main__detailed_section')) dispatch(setCurrentId(null));
                document.body.style.overflow = 'auto';
                document.body.style.userSelect = 'auto';
            }}
        >
            <div
                className={
                    isDark
                        ? `${styles.item_detailed__cover} ${styles.dark}`
                        : `${styles.item_detailed__cover} ${styles.light}`
                }
            >
                {loadingCard ? (
                    <Loader />
                ) : (
                    <div className={styles.item_detailed}>
                        <button
                            data-testid="button-close-detailed"
                            type="button"
                            className={styles.item_detailed__button_close}
                            onClick={() => {
                                dispatch(setCurrentId(null));
                                document.body.style.overflow = 'auto';
                                document.body.style.userSelect = 'auto';
                            }}
                        >
                            &times;
                        </button>
                        {section.includes('location') && (
                            <div className={styles.item_detailed__wrapper}>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Location: <b>{data?.name}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Type: <b>{data?.type}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Dimension: <b>{data?.dimension}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Total residets: <b>{data?.residents?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('character') && (
                            <div className={styles.item_detailed__wrapper}>
                                <img className={styles.item_detailed__img} src={data?.image} alt={data?.name} />
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Name: <b>{data?.name}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Status: <b>{data?.status}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Species: <b>{data?.species}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Type: <b>{data?.type}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Hender: <b>{data?.gender}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Total episodes: <b>{data?.episode?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('episode') && (
                            <div className={styles.item_detailed__wrapper}>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Episode: <b>{data?.name}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Date: <b>{data?.air_date}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Code: <b>{data?.episode}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Total characters: <b>{data?.characters?.length}</b>
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
