import styles from './detailedItem.module.css';

import { useEffect } from 'react';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useAppDispatch } from '../../shared/store/store';
import { useTheme } from '../../shared/context/themeMode';
import { ElementRequest } from '../../shared/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface DetailedItemProps {
    dataItem: ElementRequest | undefined;
}

export default function DetailedItem({ dataItem }: DetailedItemProps) {
    const { isDark } = useTheme();
    const { setLoadingCard } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const section = searchParams?.get('section');
    const name = searchParams?.get('name') || '';
    const page = searchParams?.get('page') || '';

    const updateQueryParams = () => {
        router.push(`${pathname}?section=${section}&page=${page}&name=${name}`);
    };

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
                <div className={styles.item_detailed}>
                    <button
                        data-testid="button-close-detailed"
                        type="button"
                        className={styles.item_detailed__button_close}
                        onClick={() => {
                            updateQueryParams();
                            document.body.style.overflow = 'auto';
                            document.body.style.userSelect = 'auto';
                        }}
                    >
                        &times;
                    </button>
                    {section === 'location' && (
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
                    {section === 'character' && (
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
                    {section === 'episode' && (
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
            </div>
        </div>
    );
}
