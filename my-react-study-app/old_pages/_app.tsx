import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../src/shared/styles/index.css';
import { Provider } from 'react-redux';
import { wrapper } from '../src/shared/store/store';
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
