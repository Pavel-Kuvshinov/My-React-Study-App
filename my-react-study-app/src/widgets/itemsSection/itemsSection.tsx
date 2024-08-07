/* eslint-disable react/jsx-no-useless-fragment */

import './itemsSection.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import { ElementRequest, GetCharactersParams, ItemsSectionProps } from '../../shared/types';
import Pagination from '../pagination/pagination';
import Loader from '../loader/loader';
import { itemsSlice } from '../../shared/store/itemsSlice';
import DetailedItem from '../detailedItem/detailedItem';
import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import DetailedItemsControls from '../detailedSection/detailedItemsControls';
import { useTheme } from '../../shared/context/themeMode';

export default function ItemsSection(props: ItemsSectionProps) {
    const { isDark } = useTheme();
    const { currentRequest, currentPage, currentId, section, loading } = useAppSelector((state) => state.itemsReducer);
    const { selectedItems } = useAppSelector((state) => state.itemsSelectedReducer);
    const { setSelectedItems, unsetSelectedItems } = itemsSelectedSlice.actions;
    const { setLoading, setCurrentId } = itemsSlice.actions;
    const dispatch = useAppDispatch();
    const { data } = props;

    useEffect(() => {
        if (data) {
            dispatch(setLoading(false));
        }
    }, [data]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <main className={isDark ? 'main dark' : 'main light'}>
                    <div className="main__wrapper">
                        <div className="main__content">
                            <div className="main__search_section">
                                <div className="main__items">
                                    {Object.keys(data!.info).length !== 0 && <Pagination info={data!.info} />}
                                    {data?.results.map((item, index) => {
                                        const currentItem = item as ElementRequest;
                                        return (
                                            <button
                                                type="button"
                                                data-testid="item-button"
                                                className={isDark ? 'main__item dark' : 'main__item light'}
                                                key={`${section}-${String(index)}`}
                                                id={`${currentItem.id}`}
                                                onClick={(e) => {
                                                    const targetElem = e.target as HTMLElement;
                                                    if (!targetElem.classList.contains('main__item-checkbox')) {
                                                        dispatch(setCurrentId(currentItem.id));
                                                        document.body.style.overflow = 'hidden';
                                                        document.body.style.userSelect = 'none';
                                                    }
                                                }}
                                            >
                                                <input
                                                    data-testid="item-checkbox"
                                                    className="main__item-checkbox"
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
                                                <p>name: {currentItem.name}</p>
                                            </button>
                                        );
                                    })}
                                </div>
                                {selectedItems!.length > 0 ? <DetailedItemsControls /> : <></>}
                            </div>
                            {currentId === null ? <></> : <DetailedItem />}
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}
