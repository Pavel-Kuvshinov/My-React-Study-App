import { render } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { makeStore } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import HomePage, { getServerSideProps, MainPageProps } from '../pages/index';
import { GetServerSidePropsContext } from 'next';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Home page', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    it('Here should be Home Page with character section', () => {
        const itemsData = mockCharactersData;
        const section = 'character';
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <HomePage itemsData={itemsData} section={section} id={id} itemData={itemData} />
                </ThemeProvider>
            </Provider>
        );
    });
    it('Here should be Home Page with start section', () => {
        const itemsData = mockCharactersData;
        const section = '';
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <HomePage itemsData={itemsData} section={section} id={id} itemData={itemData} />
                </ThemeProvider>
            </Provider>
        );
    });
    it('should handle query parameters correctly', async () => {
        const context = {
            query: { section: 'character', currentPage: 2, currentRequest: '', currentId: 1 },
        } as unknown as GetServerSidePropsContext;

        const result = await getServerSideProps(context);
        if ('props' in result) {
            const { props } = result as { props: MainPageProps };
            expect(props.itemsData).toEqual(mockCharactersData);
            expect(props.itemData).toEqual(mockCharactersData.results[0]);
        }
    });
});
