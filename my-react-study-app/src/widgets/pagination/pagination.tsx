import { PaginationProps } from '../../shared/types';
import styles from './pagination.module.css';
import { useRouter } from 'next/router';

export default function Pagination(props: PaginationProps) {
    const { info } = props;
    console.log(info);
    const router = useRouter();
    const { query } = router;

    const updateQueryParams = (page: number) => {
        router.push({
            pathname: router.pathname,
            query: { ...query, currentPage: page },
        });
    };

    let pageNumber = 0;
    if (info.next !== null) {
        pageNumber = Number(info.next!.match(/\d+/g)) - 1;
    } else {
        pageNumber = Number(info.prev!.match(/\d+/g)) + 1;
    }

    return (
        <div className={styles.main__pagination}>
            <button
                type="button"
                className={styles.pagination__button}
                disabled={info.prev === null}
                onClick={() => {
                    updateQueryParams(pageNumber - 1);
                }}
            >
                ‹
            </button>
            <button type="button" className={styles.pagination__button} disabled>
                {pageNumber}
            </button>
            <button
                type="button"
                className={styles.pagination__button}
                disabled={info.next === null}
                onClick={() => {
                    console.log(pageNumber + 1);
                    updateQueryParams(pageNumber + 1);
                }}
            >
                ›
            </button>
        </div>
    );
}
