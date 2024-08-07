import { Metadata } from 'next';
import '../src/shared/styles/index.css';
import React from 'react';

export const metadata: Metadata = {
    title: 'Rick & Morty App',
    description: 'My react/next study task',
    icons: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            sizes: '32x32',
            url: '/logo.svg',
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

/* 


import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../src/shared/styles/index.css';
import { Provider } from 'react-redux';
import { wrapper } from '../src/shared/store/store';
import ErrorBoundary from '../src/widgets/errorBoundary/errorBoundary';
import { ThemeProvider } from '../src/shared/context/themeMode';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={wrapper.useWrappedStore(pageProps).store}>
            <Head>
                <meta charSet="UTF-8" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="My react study task" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <title>Rick & Morty App</title>
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}


*/
