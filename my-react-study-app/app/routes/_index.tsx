import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';

import StartPage from '@/pages/startPage';
import { ApiRequest, ElementRequest } from '@/shared/types';
import { fetchDataItem, fetchDataItems } from '@/shared/api/itemsApi';

export const meta: MetaFunction = () => {
    return [{ title: 'Rick & Morty APP' }, { name: 'description', content: 'Welcome to my REACT study APP' }];
};

export const links: LinksFunction = () => [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const section = url.pathname.replace('/', '');
    const page = Number(url.searchParams.get('page')) || 1;
    const name = url.searchParams.get('name') || '';
    const idItem = Number(url.searchParams.get('id')) || null;
    let dataItem: ElementRequest = {
        id: 0,
        name: '',
        url: '',
        created: '',
    };
    let data: ApiRequest = {
        info: {
            count: 0,
            next: null,
            pages: 0,
            prev: null,
        },
        results: [],
    };

    try {
        data = await fetchDataItems(section, page, name);
        if (idItem) {
            dataItem = await fetchDataItem(section as string, idItem);
        }
    } catch (error) {
        throw new Error(`Error - ${error}`);
    }

    return { data, section, idItem, dataItem };
};

export default function Index() {
    return <StartPage />;
}
