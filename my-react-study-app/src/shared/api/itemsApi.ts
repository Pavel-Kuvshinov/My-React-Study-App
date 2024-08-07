import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants';

import { ApiRequest, ElementRequest, GetCharactersParams, GetDetailedItemParams } from '../types';

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query<ApiRequest, GetCharactersParams>({
            query: (params) => {
                const newParams = {
                    name: params.name,
                    page: params.page,
                };
                return { url: params.section, params: newParams };
            },
        }),
        getItem: builder.query<ElementRequest, GetDetailedItemParams>({
            query: (params) => ({ url: `${params.section}/${params.id}` }),
        }),
    }),
});

export const fetchDataItems = async (
    section: string = '',
    page: number = 1,
    name: string = ''
): Promise<ApiRequest> => {
    let baseUrl = `${API_BASE_URL}`;

    section === '' ? (baseUrl += `/${section}`) : (baseUrl += `/${section}/?page=${page}&name=${name}`);
    console.log(baseUrl);

    try {
        const response = await fetch(baseUrl, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Network response was not ok boom');
        }
        const data: ApiRequest = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchDataItem = async (section: string, id: number = 1): Promise<ElementRequest> => {
    const baseUrl = `${API_BASE_URL}/${section}/${id}`;

    try {
        const response = await fetch(baseUrl, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: ElementRequest = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
