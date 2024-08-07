import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import * as storeHooks from '../src/shared/store/store';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
    useSearchParams: () => ({
        get: (key: string) => {
            const params = new URLSearchParams('page=1&name=');
            return params.get(key);
        },
    }),
}));

describe('Items section', () => {
    it('Here should be items section', () => {
        const itemsData = mockCharactersData;
        const section = 'character';
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} section={section} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );
    });

    it('verify that the component renders the specified number of cards', async () => {
        const itemsData = mockCharactersData;
        const section = 'character';
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} section={section} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );

        const characterItems = await screen.findAllByTestId('item-checkbox');
        expect(characterItems.length).toBe(mockCharactersData.results.length);
    });

    it('verify selecting item', async () => {
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        const itemsData = mockCharactersData;
        const section = 'character';
        const id = 1;
        const itemData = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <ItemsSection data={itemsData} section={section} idItem={id} dataItem={itemData} />
                </ThemeProvider>
            </Provider>
        );

        const characterItems = await screen.findAllByTestId('item-checkbox');
        const characterItem = characterItems[0];
        fireEvent.change(characterItem);
        expect(func).toHaveBeenCalled();
    });
});
