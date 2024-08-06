import styles from './searchForm.module.css';

// import { useAppDispatch } from '../../shared/store/store';
// import { itemsSlice } from '../../shared/store/itemsSlice';
import { useTheme } from '../../shared/context/themeMode';
import { useRouter } from 'next/router';

export interface SearchFormProps {
    section: string;
}

export default function SearchForm({ section }: SearchFormProps) {
    const { isDark } = useTheme();
    const router = useRouter();
    const { query } = router;
    // const { setCurrentRequest, setCurrentPage, setCurrentId } = itemsSlice.actions;
    // const dispatch = useAppDispatch();

    const updateQueryParams = (currentQuery: string) => {
        router.push({
            pathname: router.pathname,
            query: { ...query, currentPage: 1, currentRequest: currentQuery },
        });
    };

    const onSubmitClick = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        const currentQuery = (data.get('searchQuery') as string).trim() || '';
        updateQueryParams(currentQuery);
        // dispatch(setCurrentRequest(query));
        // dispatch(setCurrentPage(1));
        // dispatch(setCurrentId(null));
    };

    return (
        <form
            data-testid="search-form"
            className={section !== '' ? `${styles.search_form}` : `${styles.search_form} ${styles.hide}`}
            onSubmit={onSubmitClick}
        >
            <input className={styles.search_form__input} name="searchQuery" placeholder="search..." />
            <button
                type="submit"
                className={
                    isDark
                        ? `${styles.search_form__button} ${styles.dark}`
                        : `${styles.search_form__button} ${styles.light}`
                }
            >
                Search
            </button>
        </form>
    );
}
