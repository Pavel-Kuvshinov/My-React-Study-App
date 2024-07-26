import './searchForm.css';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsSlice } from '../../shared/store/itemsSlice';

export default function SearchForm() {
    const { section } = useAppSelector((state) => state.itemsReducer);
    const { setCurrentRequest, setCurrentPage, setCurrentId } = itemsSlice.actions;
    const dispatch = useAppDispatch();

    const onSubmitClick = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        const query = (data.get('searchQuery') as string).trim() || '';
        dispatch(setCurrentRequest(query));
        dispatch(setCurrentPage(1));
        dispatch(setCurrentId(null));
    };

    return (
        <form className={section !== '' ? 'search_form' : 'search_form hide'} onSubmit={onSubmitClick}>
            <input className="search_form__input" name="searchQuery" placeholder="search..." />
            <button type="submit" className="search_form__button">
                Search
            </button>
        </form>
    );
}
