import React from 'react';
import Header from '../src/widgets/header/header';

// import { useAppDispatch, useAppSelector, wrapper } from '../src/shared/store/store';
// import { useEffect } from 'react';
// import ErrorSection from '../src/widgets/errorSection/errorSection';
// import Loader from '../src/widgets/loader/loader';
// import { itemsSlice } from '../src/shared/store/itemsSlice';

import { wrapper } from '../src/shared/store/store';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import StartSection from '../src/widgets/startSection/startSection';
import { ApiRequest, ElementRequest } from '../src/shared/types';
import { itemsApi } from '../src/shared/api/itemsApi';
import { GetServerSideProps } from 'next';

export interface MainPageProps {
    itemsData: ApiRequest;
    section: string;
    itemData: ElementRequest;
}

export default function HomePage({ itemsData, section, itemData }: MainPageProps): JSX.Element {
    console.log('itemsData');
    console.log(itemsData);
    // console.log('section');
    // console.log(section);
    // const { loading, error } = useAppSelector((state) => state.items);
    // const { setLoading } = itemsSlice.actions;
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (error) throw new Error('I crashed!');
    // }, [error]);

    // useEffect(() => {
    //     if (itemsData) {
    //         dispatch(setLoading(false));
    //     }
    // }, [itemsData]);
    return (
        <>
            <Header section={section} />
            {section === '' ? <StartSection /> : <ItemsSection data={itemsData} dataItem={itemData} />}
        </>
        // <>
        //     <Header />
        //     {error === true ? (
        //         <ErrorSection />
        //     ) : section === '' ? (
        //         <StartSection />
        //     ) : loading === true ? (
        //         <Loader />
        //     ) : (
        //         <ItemsSection data={data} />
        //     )}
        // </>
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
        // </>
    );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const { query } = context;
    const name = (query.currentRequest as string) || '';
    const page = Number(query.currentPage) || 1;
    const section = (query.section as string) || '';
    const id = Number(query.currentId);

    const { data: itemsData } = await store.dispatch(itemsApi.endpoints.getItems.initiate({ section, name, page }));

    let itemData: ElementRequest = {
        id: 0,
        name: '',
        url: '',
        created: '',
    };

    if (id) {
        const { data } = await store.dispatch(itemsApi.endpoints.getItem.initiate({ section, id }));
        if (data) {
            itemData = data;
        }
    }

    return {
        props: {
            itemsData,
            section,
            itemData,
        },
    };
});
