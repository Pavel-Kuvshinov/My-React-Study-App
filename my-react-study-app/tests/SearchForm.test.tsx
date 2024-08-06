import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import SearchForm from '../src/widgets/searchForm/searchFrom';
import { makeStore } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Search form', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    it('Here should be search form', () => {
        const section = 'character';
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <SearchForm section={section} />
                </ThemeProvider>
            </Provider>
        );
    });
    it('Send search form calls dispatch', () => {
        const section = 'character';
        mockRouter.push('/?currentRequest=Ri');
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <SearchForm section={section} />
                </ThemeProvider>
            </Provider>
        );
        const form = screen.getByTestId('search-form');
        fireEvent.submit(form);
        expect(mockRouter).toMatchObject({
            query: { currentRequest: '' },
        });
    });
});
