import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';

import StartPage from '../../src/pages/startPage';

export const meta: MetaFunction = () => {
    return [{ title: 'Rick & Morty APP' }, { name: 'description', content: 'Welcome to my REACT study APP' }];
};

export const links: LinksFunction = () => [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }];

export default function Index() {
    return <StartPage />;
}
