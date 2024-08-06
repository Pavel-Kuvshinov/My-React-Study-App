import styles from './itemsSection.module.css';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { ElementRequest, ItemsSectionProps } from '../../shared/types';
import Pagination from '../pagination/pagination';
import DetailedItem from '../detailedItem/detailedItem';
import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import DetailedItemsControls from '../detailedSection/detailedItemsControls';
import { useTheme } from '../../shared/context/themeMode';
import { useRouter } from 'next/router';

export default function ItemsSection(props: ItemsSectionProps) {
    const { isDark } = useTheme();
    const { selectedItems } = useAppSelector((state) => state.itemsSelected);
    const { setSelectedItems, unsetSelectedItems } = itemsSelectedSlice.actions;
    const dispatch = useAppDispatch();
    const { data, section, idItem, dataItem } = props;
    const router = useRouter();
    const { query } = router;

    const updateQueryParams = (id: number) => {
        router.push({
            pathname: router.pathname,
            query: { ...query, currentId: id },
        });
    };

    return (
        <>
            <main className={isDark ? `${styles.main} ${styles.dark}` : `${styles.main} ${styles.light}`}>
                <div className={styles.main__wrapper}>
                    <div className={styles.main__content}>
                        <div className={styles.main__search_section}>
                            <div className={styles.main__items}>
                                {Object.keys(data!.info).length !== 0 && <Pagination info={data!.info} />}
                                {data?.results.map((item, index) => {
                                    const currentItem = item as ElementRequest;
                                    return (
                                        <div
                                            className={
                                                isDark
                                                    ? `${styles.main__item} ${styles.dark}`
                                                    : `${styles.main__item} ${styles.light}`
                                            }
                                            key={`${section}-${String(index)}`}
                                        >
                                            <input
                                                data-testid="item-checkbox"
                                                className={styles.main__item_checkbox}
                                                type="checkbox"
                                                checked={selectedItems?.some(
                                                    (elem) => JSON.stringify(elem) === JSON.stringify(currentItem)
                                                )}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        dispatch(setSelectedItems(currentItem));
                                                    } else {
                                                        dispatch(unsetSelectedItems(currentItem));
                                                    }
                                                }}
                                            />
                                            <div>
                                                <p>name: {currentItem.name}</p>
                                                <button
                                                    type="button"
                                                    data-testid="item-button"
                                                    id={`${currentItem.id}`}
                                                    className={
                                                        isDark
                                                            ? `constant-class ${styles.main__item_button} ${styles.dark}`
                                                            : `constant-class ${styles.main__item_button} ${styles.light}`
                                                    }
                                                    onClick={() => {
                                                        updateQueryParams(currentItem.id);
                                                        document.body.style.overflow = 'hidden';
                                                        document.body.style.userSelect = 'none';
                                                    }}
                                                >
                                                    Detail
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {selectedItems!.length > 0 ? <DetailedItemsControls /> : <></>}
                        </div>
                        {idItem === null ? <></> : <DetailedItem dataItem={dataItem} section={section} />}
                    </div>
                </div>
            </main>
        </>
    );
}
