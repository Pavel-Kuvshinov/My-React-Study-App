import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HttpResponse, http } from 'msw';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import * as storeHooks from '../src/shared/store/store';

describe('Items section', () => {
    it('Here should be items section', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <ItemsSection data={mockCharactersData} />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });
    it('verify that the component renders the specified number of cards', async () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <ItemsSection data={mockCharactersData} />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const characterItems = await screen.findAllByTestId('item-checkbox');
        expect(characterItems.length).toBe(mockCharactersData.results.length);
    });
    it('verify selecting item', async () => {
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <ItemsSection data={mockCharactersData} />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const characterItems = await screen.findAllByTestId('item-checkbox');
        const characterItem = characterItems[0];
        fireEvent.change(characterItem);
        expect(func).toHaveBeenCalled();
    });
});
