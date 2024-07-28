import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import App from '../src/app/app';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

describe('Ensure that the 404 page is displayed when navigating to an invalid route.', () => {
    it('should render - Sorry, there is no data for your requiest', async () => {
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/caqsseE']}>
                        <App />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        expect(screen.queryByText('Sorry, we can’t find this page')).toBeInTheDocument();
    });
});
