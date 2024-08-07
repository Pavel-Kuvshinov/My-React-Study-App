import HomePage from '../src/pages/homePage';
import { fetchDataItem, fetchDataItems } from '../src/shared/api/itemsApi';
import { ApiRequest, ElementRequest } from '../src/shared/types';
import React from 'react';

export interface PageParams {
    searchParams: { name?: string; page?: number; section?: string; id?: number };
}

export default async function Page({ searchParams }: PageParams) {
    const name = searchParams.name;
    const page = searchParams.page;
    const section = searchParams.section;
    const id = searchParams.id;
    let itemData: ElementRequest = {
        id: 0,
        name: '',
        url: '',
        created: '',
    };
    let itemsData: ApiRequest = {
        info: {
            count: 0,
            next: null,
            pages: 0,
            prev: null,
        },
        results: [],
    };

    try {
        itemsData = await fetchDataItems(section, page, name);
        if (id) {
            itemData = await fetchDataItem(section as string, id);
        }
    } catch (error) {
        console.error(error);
    }

    return <HomePage itemsData={itemsData} section={section} id={id} itemData={itemData} />;
}
