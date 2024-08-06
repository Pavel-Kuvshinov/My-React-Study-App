import styles from './detailedItem.module.css';

import { useEffect } from 'react';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import Loader from '../loader/loader';
import { useTheme } from '../../shared/context/themeMode';
import { ElementRequest } from '../../shared/types';
import { useRouter } from 'next/router';

export interface DetailedItemProps {
    section: string;
    dataItem: ElementRequest | undefined;
}

export default function DetailedItem({ dataItem, section }: DetailedItemProps) {
    const { isDark } = useTheme();
    const { loadingCard } = useAppSelector((state) => state.items);
    const { setLoadingCard } = itemsSlice.actions;
    const router = useRouter();
    const dispatch = useAppDispatch();

    console.log('dataItem');
    console.log(dataItem);
    useEffect(() => {
        if (dataItem) {
            dispatch(setLoadingCard(false));
        }
    }, [dataItem]);

    return (
        <div className={styles.main__detailed_section}>
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
                                const query = router.query
                                    ? Object.fromEntries(
                                          Object.entries(router.query).filter(([key]) => key !== 'currentId')
                                      )
                                    : {};

                                router.push({
                                    pathname: router.pathname,
                                    query,
                                });
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
                                    Location: <b>{dataItem?.name}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Type: <b>{dataItem?.type}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Dimension: <b>{dataItem?.dimension}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Total residets: <b>{dataItem?.residents?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('character') && (
                            <div className={styles.item_detailed__wrapper}>
                                <img className={styles.item_detailed__img} src={dataItem?.image} alt={dataItem?.name} />
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Name: <b>{dataItem?.name}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Status: <b>{dataItem?.status}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Species: <b>{dataItem?.species}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Type: <b>{dataItem?.type}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Hender: <b>{dataItem?.gender}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Total episodes: <b>{dataItem?.episode?.length}</b>
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
                                    Episode: <b>{dataItem?.name}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Date: <b>{dataItem?.air_date}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Code: <b>{dataItem?.episode}</b>
                                </p>
                                <p
                                    className={
                                        isDark
                                            ? `${styles.item_detailed__text} ${styles.dark}`
                                            : `${styles.item_detailed__text} ${styles.light}`
                                    }
                                >
                                    Total characters: <b>{dataItem?.characters?.length}</b>
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
