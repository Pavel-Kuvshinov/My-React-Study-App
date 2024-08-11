import { useSearchParams } from '@remix-run/react';
import { PaginationProps } from '../../shared/types';
import './pagination.css';

export default function Pagination(props: PaginationProps) {
    const { info } = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') || '';
    const pageNumber = Number(searchParams.get('page')) || 1;

    const updateQueryParams = (page: number) => {
        setSearchParams(`?page=${page}&name=${name}`);
    };

    return (
        <div className="main__pagination">
            <button
                type="button"
                className="pagination__button"
                disabled={info.prev === null}
                onClick={() => {
                    updateQueryParams(pageNumber - 1);
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
                    updateQueryParams(pageNumber + 1);
                }}
            >
                ›
            </button>
        </div>
    );
}
