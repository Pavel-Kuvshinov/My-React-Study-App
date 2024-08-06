import React from 'react';
import Header from '../src/widgets/header/header';
import { wrapper } from '../src/shared/store/store';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import StartSection from '../src/widgets/startSection/startSection';
import { ApiRequest, ElementRequest } from '../src/shared/types';
import { itemsApi } from '../src/shared/api/itemsApi';
import { GetServerSideProps } from 'next';

export interface MainPageProps {
    itemsData: ApiRequest;
    section: string;
    id: number;
    itemData: ElementRequest;
}

export default function HomePage({ itemsData, section, id, itemData }: MainPageProps): JSX.Element {
    return (
        <>
            <Header section={section} />
            {section === '' ? (
                <StartSection />
            ) : (
                <ItemsSection data={itemsData} section={section} idItem={id} dataItem={itemData} />
            )}
        </>
    );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const { query } = context;
    const name = (query.currentRequest as string) || '';
    const page = Number(query.currentPage) || 1;
    const section = (query.section as string) || '';
    const id = Number(query.currentId);

    const { data: itemsData } = await store.dispatch(itemsApi.endpoints.getItems.initiate({ section, name, page }));

    let itemData: ElementRequest | null = null;

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
            id,
            itemData,
        },
    };
});
