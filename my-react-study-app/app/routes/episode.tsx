import Header from '@/widgets/header/header';
import { LinksFunction, MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [{ title: 'Rick & Morty APP - Episode' }, { name: 'description', content: 'Welcome to my REACT study APP' }];
};

export const links: LinksFunction = () => [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }];

export default function Episode() {
    return (
        <>
            <Header />
            <p>Episode</p>
        </>
    );
}
