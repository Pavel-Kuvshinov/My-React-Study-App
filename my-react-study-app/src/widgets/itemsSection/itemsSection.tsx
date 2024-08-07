import styles from './itemsSection.module.css';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { ElementRequest, ItemsSectionProps } from '../../shared/types';
import Pagination from '../pagination/pagination';
import DetailedItem from '../detailedItem/detailedItem';
import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import DetailedItemsControls from '../detailedSection/detailedItemsControls';
import { useTheme } from '../../shared/context/themeMode';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ItemsSection(props: ItemsSectionProps) {
    const { isDark } = useTheme();
    const { selectedItems } = useAppSelector((state) => state.itemsSelected);
    const { setSelectedItems, unsetSelectedItems } = itemsSelectedSlice.actions;
    const dispatch = useAppDispatch();
    const { data, idItem, dataItem } = props;

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const section = searchParams?.get('section');
    const name = searchParams?.get('name') || '';
    const page = searchParams?.get('page') || '';

    const updateQueryParams = (id: number) => {
        router.push(`${pathname}?section=${section}&page=${page}&name=${name}&id=${id}`);
    };

    return (
        <>
            <main className={isDark ? `${styles.main} ${styles.dark}` : `${styles.main} ${styles.light}`}>
                <div className={styles.main__wrapper}>
                    <div className={styles.main__content}>
                        <div className={styles.main__search_section}>
                            <div className={styles.main__items}>
                                {data.info && data.results ? (
                                    <>
                                        {Object.keys(data?.info).length !== 0 && <Pagination info={data!.info} />}
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
                                                            (elem) =>
                                                                JSON.stringify(elem) === JSON.stringify(currentItem)
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
                                    </>
                                ) : (
                                    <p>Here is empty</p>
                                )}
                            </div>
                            {selectedItems!.length > 0 ? <DetailedItemsControls /> : <></>}
                        </div>
                        {idItem === null || idItem === undefined ? <></> : <DetailedItem dataItem={dataItem} />}
                    </div>
                </div>
            </main>
        </>
    );
}
