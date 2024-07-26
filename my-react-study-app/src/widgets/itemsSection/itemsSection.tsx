/* eslint-disable react/jsx-no-useless-fragment */

import './itemsSection.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import { ElementRequest, GetCharactersParams } from '../../shared/types';
import Pagination from '../pagination/pagination';
import Loader from '../loader/loader';
import { itemsSlice } from '../../shared/store/itemsSlice';
import DetailedItem from '../detailedItem/detailedItem';

export default function ItemsSection() {
    // console.log('rerender items section');
    const { currentRequest, currentPage, currentId, section, loading } = useAppSelector((state) => state.itemsReducer);
    const params: GetCharactersParams = { section, name: currentRequest, page: currentPage };
    const { setLoading, setCurrentId } = itemsSlice.actions;
    const dispatch = useAppDispatch();
    const { data } = itemsApi.useGetItemsQuery(params);

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
                <main className="main">
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
                                                className="main__item"
                                                key={`${section}-${String(index)}`}
                                                id={`${currentItem.id}`}
                                                onClick={() => {
                                                    dispatch(setCurrentId(currentItem.id));
                                                    document.body.style.overflow = 'hidden';
                                                    document.body.style.userSelect = 'none';
                                                }}
                                            >
                                                <p>name: {currentItem.name}</p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            {currentId === null ? <></> : <DetailedItem />}
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}
