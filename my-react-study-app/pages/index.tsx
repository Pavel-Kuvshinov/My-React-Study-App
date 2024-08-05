import React from 'react';
import Header from '../src/widgets/header/header';

import { useAppDispatch, useAppSelector } from '../src/shared/store/store';
import { useEffect } from 'react';
import ErrorSection from '../src/widgets/errorSection/errorSection';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import StartSection from '../src/widgets/startSection/startSection';
import { GetCharactersParams } from '../src/shared/types';
import { itemsApi } from '../src/shared/api/itemsApi';
import Loader from '../src/widgets/loader/loader';
import { itemsSlice } from '../src/shared/store/itemsSlice';

export default function HomePage(): JSX.Element {
    const { currentRequest, currentPage, section, loading, error } = useAppSelector((state) => state.itemsReducer);
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
        <>
            <Header />
            {error === true ? (
                <ErrorSection />
            ) : section === '' ? (
                <StartSection />
            ) : loading === true ? (
                <Loader />
            ) : (
                <ItemsSection data={data} />
            )}
        </>
        // <>
        // <Header />
        // {error === true ? (
        //     <ErrorSection />
        // ) : loading === true ? (
        //     <Loader />
        // ) : section === '' ? (
        //     <StartSection />
        // ) : (
        //     <ItemsSection data={data} />
        // )}
        // <main>
        //     <p>Hello Next App</p>
        // </main>
        // </>
    );
}
