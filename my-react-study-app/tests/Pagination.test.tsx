import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';
import Pagination from '../src/widgets/pagination/pagination';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';

describe('Pagination tests', () => {
    it('Here should be pagination', () => {
        const { info } = mockCharactersData;

        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Pagination
                            info={{
                                count: info.count,
                                next: info.next,
                                pages: info.pages,
                                prev: info.prev,
                            }}
                        />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });
    it('Pagination buttons click checked', () => {
        const { info } = mockCharactersData;
        const func = vi.spyOn(storeHooks, 'useAppDispatch');

        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Pagination
                            info={{
                                count: info.count,
                                next: info.next,
                                pages: info.pages,
                                prev: info.prev,
                            }}
                        />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const nextPageBtn = screen.getByRole('button', { name: '›' });
        fireEvent.click(nextPageBtn);
        expect(func).toHaveBeenCalled();
        const prevPageBtn = screen.getByRole('button', { name: '‹' });
        fireEvent.click(prevPageBtn);
        expect(func).toHaveBeenCalled();
    });
});
