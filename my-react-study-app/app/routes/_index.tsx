import { ThemeProvider } from '@/shared/context/themeMode';
import { store } from '@/shared/store/store';
import Header from '@/widgets/header/header';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Provider } from 'react-redux';

import StartSection from '@/widgets/startSection/startSection';
import { Outlet } from 'react-router-dom';

export const meta: MetaFunction = () => {
    return [{ title: 'Rick & Morty APP' }, { name: 'description', content: 'Welcome to my REACT study APP' }];
};

export const links: LinksFunction = () => [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }];

export default function Index() {
    return (
        <>
            <Header section="" />
            <StartSection />
        </>
    );
}
