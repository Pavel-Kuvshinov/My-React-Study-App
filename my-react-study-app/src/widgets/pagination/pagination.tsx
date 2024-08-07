import { PaginationProps } from '../../shared/types';
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Pagination(props: PaginationProps) {
    const { info } = props;
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const section = searchParams?.get('section');
    const name = searchParams?.get('name') || '';

    const updateQueryParams = (page: number) => {
        router.push(`${pathname}?section=${section}&page=${page}&name=${name}`);
    };

    const pageNumber = Number(searchParams?.get('page')) || 1;

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
                    updateQueryParams(pageNumber + 1);
                }}
            >
                ›
            </button>
        </div>
    );
}
