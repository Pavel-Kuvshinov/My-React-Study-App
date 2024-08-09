import Header from '@/widgets/header/header';
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
    const results = url.pathname;
    console.log(url);
    return results;
};

export default function Character() {
    const data = useLoaderData() as string;
    console.log(data.includes('character'));
    return (
        <>
            <Header />
            <p>Character</p>
        </>
    );
}
