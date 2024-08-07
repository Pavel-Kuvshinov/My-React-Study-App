import styles from './searchForm.module.css';
import { useTheme } from '../../shared/context/themeMode';
import { usePathname, useRouter } from 'next/navigation';

export interface SearchFormProps {
    section: string;
}

export default function SearchForm({ section }: SearchFormProps) {
    const { isDark } = useTheme();
    // const router = useRouter();
    // const { query } = router;
    const pathname = usePathname();
    const router = useRouter();

    const updateQueryParams = (name: string) => {
        router.push(`${pathname}?section=${section}&page=1&name=${name}`);
    };

    const onSubmitClick = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        const currentQuery = (data.get('searchQuery') as string).trim() || '';
        updateQueryParams(currentQuery);
    };

    return (
        <form
            data-testid="search-form"
            className={
                section === '' || section === undefined
                    ? `${styles.search_form} ${styles.hide}`
                    : `${styles.search_form}`
            }
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
