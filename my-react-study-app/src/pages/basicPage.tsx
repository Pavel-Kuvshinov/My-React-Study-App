import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { useEffect } from 'react';
import Header from '../widgets/header/header';
import ErrorSection from '../widgets/errorSection/errorSection';
import ErrorBoundary from '../widgets/errorBoundary/errorBoundary';
import ItemsSection from '../widgets/itemsSection/itemsSection';
import StartSection from '../widgets/startSection/startSection';
import { GetCharactersParams } from '../shared/types';
import { itemsApi } from '../shared/api/itemsApi';
import Loader from '../widgets/loader/loader';
import { itemsSlice } from '../shared/store/itemsSlice';

export default function BasicPage() {
    const { currentRequest, currentPage, currentId, section, loading, error } = useAppSelector(
        (state) => state.itemsReducer
    );
    const params: GetCharactersParams = { section, name: currentRequest, page: currentPage };
    const { setLoading } = itemsSlice.actions;
    const dispatch = useAppDispatch();
    const { data } = itemsApi.useGetItemsQuery(params);

    useEffect(() => {
        if (error) throw new Error('I crashed!');
    }, [error]);

    useEffect(() => {
        if (data) {
            dispatch(setLoading(false));
        }
    }, [data]);

    return (
        <ErrorBoundary>
            <Header />
            {error === true ? (
                <ErrorSection />
            ) : loading === true ? (
                <Loader />
            ) : section === '' ? (
                <StartSection />
            ) : (
                <ItemsSection data={data} />
            )}
        </ErrorBoundary>
    );
}
