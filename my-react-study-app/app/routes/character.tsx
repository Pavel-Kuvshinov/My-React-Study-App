/* eslint-disable react/prop-types */
import { fetchDataItem, fetchDataItems } from '@/shared/api/itemsApi';
import { ApiRequest, ElementRequest, ItemsSectionProps } from '@/shared/types';
import Header from '@/widgets/header/header';
import ItemsSection from '@/widgets/itemsSection/itemsSection';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [
        { title: 'Rick & Morty APP - Character' },
        { name: 'description', content: 'Welcome to my REACT study APP' },
    ];
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
        console.error(error);
    }

    return { data, section, idItem, dataItem };
};

export default function Character() {
    const props = useLoaderData() as ItemsSectionProps;
    const { data, section, idItem, dataItem } = props;
    // console.log(props);
    return (
        <>
            <Header />
            <ItemsSection data={data} section={section} idItem={idItem} dataItem={dataItem} />
            <p>Character</p>
        </>
    );
}
