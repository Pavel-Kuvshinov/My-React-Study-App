import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import SearchForm from '../src/widgets/searchForm/searchFrom';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';

describe('Search form', () => {
    it('Here should be search form', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <SearchForm />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });
    it('Send search form calls dispatch', () => {
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <SearchForm />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
        const form = screen.getByTestId('search-form');
        fireEvent.submit(form);
        expect(func).toHaveBeenCalled();
    });
});
