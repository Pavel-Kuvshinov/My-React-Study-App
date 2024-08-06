import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants';

import { ApiRequest, ElementRequest, GetCharactersParams, GetDetailedItemParams } from '../types';

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query<ApiRequest, GetCharactersParams>({
            query: (params) => {
                console.log('params');
                console.log(params);
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
