/* eslint-disable react/jsx-no-useless-fragment */
import { useSearchParams } from '@remix-run/react';
import './itemsSection.css';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { ElementRequest, ItemsSectionProps } from '../../shared/types';
import Pagination from '../pagination/pagination';
import DetailedItem from '../detailedItem/detailedItem';
import DetailedItemsControls from '../detailedSection/detailedItemsControls';
import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import { useTheme } from '../../shared/context/themeMode';

export default function ItemsSection(props: ItemsSectionProps) {
    const { isDark } = useTheme();
    const { selectedItems } = useAppSelector((state) => state.itemsSelected);
    const { setSelectedItems, unsetSelectedItems } = itemsSelectedSlice.actions;
    const dispatch = useAppDispatch();
    const { data, idItem, dataItem } = props;

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams?.get('name') || '';
    const page = searchParams?.get('page') || '';

    const updateQueryParams = (id: number) => {
        setSearchParams(`?page=${page}&name=${name}&id=${id}`);
    };

    return (
        <>
            <main className={isDark ? 'main dark' : 'main light'}>
                <div className="main__wrapper">
                    <div className="main__content">
                        <div className="main__search_section">
                            <div className="main__items">
                                {Object.keys(data.info).length !== 0 && <Pagination info={data.info} />}
                                {data?.results.map((item, index) => {
                                    const currentItem = item as ElementRequest;
                                    return (
                                        <div
                                            className={isDark ? 'main__item dark' : 'main__item light'}
                                            key={`${currentItem.id}`}
                                        >
                                            <input
                                                data-testid="item-checkbox"
                                                className="main__item-checkbox"
                                                type="checkbox"
                                                checked={selectedItems?.some(
                                                    (elem) => JSON.stringify(elem) === JSON.stringify(currentItem)
                                                )}
                                                onChange={(e) => {
                                                    e.target.checked
                                                        ? dispatch(setSelectedItems(currentItem))
                                                        : dispatch(unsetSelectedItems(currentItem));
                                                }}
                                            />
                                            <div>
                                                <p>name: {currentItem.name}</p>
                                                <button
                                                    type="button"
                                                    data-testid="item-button"
                                                    id={`${currentItem.id}`}
                                                    className={
                                                        isDark ? `main__item_button dark` : `main__item_button light`
                                                    }
                                                    onClick={() => {
                                                        updateQueryParams(currentItem.id);
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
                        {idItem === null ? <></> : <DetailedItem dataItem={dataItem} />}
                    </div>
                </div>
            </main>
        </>
    );
}
