import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import SearchForm from '../src/widgets/searchForm/searchFrom';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
}));

describe('Search form', () => {
    it('Here should be search form', () => {
        const section = 'character';
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <SearchForm section={section} />
                </ThemeProvider>
            </Provider>
        );
        const form = screen.getByTestId('search-form');
        expect(form).toBeInTheDocument();
    });
    it('Send search form calls dispatch', () => {
        const section = 'character';
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <SearchForm section={section} />
                </ThemeProvider>
            </Provider>
        );
        const form = screen.getByTestId('search-form');
        fireEvent.submit(form);
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining('?section=character&page=1&name='));
    });
});
