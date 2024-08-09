import { useLocation, useSearchParams } from '@remix-run/react';
import './searchForm.css';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useTheme } from '../../shared/context/themeMode';

export default function SearchForm() {
    const { isDark } = useTheme();

    const location = useLocation();
    const section = location.pathname.replace('/', '');

    const [searchParams, setSearchParams] = useSearchParams();

    const updateQueryParams = (queryRequest: string) => {
        setSearchParams(`?page=1&name=${queryRequest}`);
    };

    const onSubmitClick = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        const query = (data.get('searchQuery') as string).trim() || '';
        updateQueryParams(query);
    };

    return (
        <form
            data-testid="search-form"
            className={section !== '' ? 'search_form' : 'search_form hide'}
            onSubmit={onSubmitClick}
        >
            <input className="search_form__input" name="searchQuery" placeholder="search..." />
            <button type="submit" className={isDark ? 'search_form__button dark' : 'search_form__button light'}>
                Search
            </button>
        </form>
    );
}
