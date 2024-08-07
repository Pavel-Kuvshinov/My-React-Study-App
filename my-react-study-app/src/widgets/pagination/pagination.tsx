import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { GetCharactersParams, PaginationProps } from '../../shared/types';
import './pagination.css';

export default function Pagination(props: PaginationProps) {
    const { info } = props;
    const { currentRequest, currentPage, currentId, section, loading } = useAppSelector((state) => state.itemsReducer);
    const params: GetCharactersParams = { section, name: currentRequest, page: currentPage };
    const { data } = itemsApi.useGetItemsQuery(params);
    const { setCurrentPage } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    let pageNumber = 0;
    if (info.next !== null) {
        pageNumber = Number(info.next!.match(/\d+/g)) - 1;
    } else {
        pageNumber = Number(info.prev!.match(/\d+/g)) + 1;
    }

    return (
        <div className="main__pagination">
            <button
                type="button"
                className="pagination__button"
                disabled={info.prev === null}
                onClick={() => {
                    dispatch(setCurrentPage(pageNumber - 1));
                }}
            >
                ‹
            </button>
            <button type="button" className="pagination__button" disabled>
                {pageNumber}
            </button>
            <button
                type="button"
                className="pagination__button"
                disabled={info.next === null}
                onClick={() => {
                    dispatch(setCurrentPage(pageNumber + 1));
                }}
            >
                ›
            </button>
        </div>
    );
}
