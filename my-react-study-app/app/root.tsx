import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';
import { Provider } from 'react-redux';
import NotFoundPage from '../src/pages/notFoundPage/notFoundPage';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { store } from '../src/shared/store/store';
import ErrorSection from '../src/widgets/errorSection/errorSection';
import '../src/shared/styles/index.css';
import '../src/shared/styles/notFoundPage.css';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Provider store={store}>
                    <ThemeProvider>{children}</ThemeProvider>
                </Provider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return <NotFoundPage />;
    }

    return <ErrorSection />;
}
