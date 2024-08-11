import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useSearchParams, useLocation } from '@remix-run/react';
import { Provider } from 'react-redux';
import SearchForm from '../src/widgets/searchForm/searchFrom';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

vi.mock('@remix-run/react', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@remix-run/react')>();
    return {
        ...actual,
        useSearchParams: vi.fn(),
        useLocation: vi.fn(),
    };
});

const setSearchParams = vi.fn();
const mockSearchParams = new URLSearchParams();

beforeEach(() => {
    (useLocation as Mock).mockReturnValue({
        pathname: '/character',
        search: '?page=1&name=',
    });
});

describe('Search form', () => {
    it('Here should be search form', () => {
        mockSearchParams.set('page', '1');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <SearchForm />
                </ThemeProvider>
            </Provider>
        );
        const form = screen.getByTestId('search-form');
        expect(form).toBeInTheDocument();
    });
    it('Send search form calls dispatch', async () => {
        mockSearchParams.set('page', '1');
        mockSearchParams.set('name', '');
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <SearchForm />
                </ThemeProvider>
            </Provider>
        );
        const form = screen.getByTestId('search-form');
        fireEvent.submit(form);
        await waitFor(() => {
            expect(setSearchParams).toHaveBeenCalledWith('?page=1&name=');
        });
    });
});
