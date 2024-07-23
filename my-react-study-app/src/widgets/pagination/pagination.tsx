import { PaginationProps } from '../../shared/types';
import './pagination.css';

export default function Pagination(props: PaginationProps) {
    const { info, handleRequest, onClick } = props;

    let pageNumber = 0;
    if (info.prev) {
        pageNumber = Number(info.prev!.split('=')[1]) + 1;
    } else {
        pageNumber = Number(info.next!.split('=')[1]) - 1;
    }

    return (
        <div className="main__pagination">
            <button
                type="button"
                className="pagination__button"
                disabled={info.prev === null}
                onClick={() => {
                    if (info.next !== null) {
                        handleRequest(info.prev!.split('/').reverse()[0]);
                    }
                    onClick(pageNumber - 1);
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
                    if (info.next !== null) {
                        handleRequest(info.next!.split('/').reverse()[0]);
                    }
                    onClick(pageNumber + 1);
                }}
            >
                ›
            </button>
        </div>
    );
}
