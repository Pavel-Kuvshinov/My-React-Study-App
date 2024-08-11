import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Provider } from 'react-redux';
import { useLocation, useSearchParams } from '@remix-run/react';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import * as storeHooks from '../src/shared/store/store';

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

describe('Items section', () => {
    it('Here should be items section', () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const itemsData = mockCharactersData;
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );
    });

    it('verify that the component renders the specified number of cards', async () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const itemsData = mockCharactersData;
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );

        const characterItems = await screen.findAllByTestId('item-checkbox');
        expect(characterItems.length).toBe(mockCharactersData.results.length);
    });

    it('verify selecting item', async () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        const itemsData = mockCharactersData;
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );

        const characterItems = await screen.findAllByTestId('item-checkbox');
        const characterItem = characterItems[0];
        fireEvent.change(characterItem);
        expect(func).toHaveBeenCalled();
    });

    it('Select item to detailed', async () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);

        const itemsData = mockCharactersData;
        const id = 1;
        const itemData = mockCharactersData.results[0];

        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );

        const characterItemsDetail = await screen.getAllByText('Detail');
        const characterItemDetail = characterItemsDetail[0];
        fireEvent.click(characterItemDetail);
    });
});
