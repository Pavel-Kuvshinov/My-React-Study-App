import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/shared/context/themeMode';
import { MemoryRouter } from 'react-router-dom';
import { store } from '@/shared/store/store';
import NotFoundPage from '../src/pages/notFoundPage/notFoundPage';

describe('Page 404', () => {
    it('renders the not found page correctly', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/asdasd']}>
                        <NotFoundPage />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(screen.getByText('Sorry, we can’t find this page')).toBeInTheDocument();
    });
});
