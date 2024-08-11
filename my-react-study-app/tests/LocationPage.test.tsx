import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useLoaderData, useLocation, useSearchParams } from '@remix-run/react';
import { Provider } from 'react-redux';
import { mockCharactersData, mockEpisodesData, mockLocationsData } from '@/shared/mocks/mockedData/cards';
import Header from '../src/widgets/header/header';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';
import * as themeHook from '../src/shared/context/themeMode';
import Character from '../app/routes/character';
import Episode from '../app/routes/episode';
import Location from '../app/routes/location';

vi.mock('@remix-run/react', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@remix-run/react')>();
    return {
        ...actual,
        useSearchParams: vi.fn(),
        useLocation: vi.fn(),
        useLoaderData: vi.fn(),
    };
});

const setSearchParams = vi.fn();
const mockSearchParams = new URLSearchParams();

beforeEach(() => {
    (useLocation as Mock).mockReturnValue({
        pathname: '/location',
        search: '?page=2&name=',
    });
    (useLoaderData as Mock).mockReturnValue({
        data: mockLocationsData,
        idItem: 21,
        dataItem: mockLocationsData.results[0],
    });
});

describe('Episode page', () => {
    it('Here should be Episode page', () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/location?page=2&name=&id=21']}>
                        <Location />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });

    it('Theme should toggled', () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const funcTheme = vi.spyOn(themeHook, 'useTheme');
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/location?page=2&name=&id=21']}>
                        <Location />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const themeBtn = screen.getByTestId('button-theme');
        const header = container.querySelector('.header');
        const main = container.querySelector('.main');
        expect(header).not.toHaveClass('dark');
        expect(main).not.toHaveClass('dark');
        fireEvent.click(themeBtn);
        expect(funcTheme).toHaveBeenCalled();
        expect(header).toHaveClass('dark');
        expect(header).not.toHaveClass('light');
        expect(main).toHaveClass('dark');
        expect(main).not.toHaveClass('light');
    });
});
