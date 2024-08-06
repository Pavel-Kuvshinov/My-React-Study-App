import { render, screen } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import DetailedItem from '../src/widgets/detailedItem/detailedItem';
import { makeStore } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Detailed item tests', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    it('Here should be detailed character item', () => {
        const dataItem = mockCharactersData.results[0];
        const section = 'character';
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <DetailedItem dataItem={dataItem} section={section} />
                </ThemeProvider>
            </Provider>
        );
    });
    it('Detailed item button click check', () => {
        const dataItem = mockCharactersData.results[0];
        const section = 'character';
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <DetailedItem dataItem={dataItem} section={section} />
                </ThemeProvider>
            </Provider>
        );
        const closeBtn = screen.getByTestId('button-close-detailed');
        userEvent.click(closeBtn);
        expect(mockRouter).toMatchObject({
            query: {},
        });
    });
});
