import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useLoaderData, useLocation, useSearchParams } from '@remix-run/react';
import { Provider } from 'react-redux';
import { mockCharactersData } from '@/shared/mocks/mockedData/cards';
import Header from '../src/widgets/header/header';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';
import * as themeHook from '../src/shared/context/themeMode';
import Character from '../app/routes/character';

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
        pathname: '/character',
        search: '?page=2&name=',
    });
    (useLoaderData as Mock).mockReturnValue({
        data: mockCharactersData,
        idItem: 21,
        dataItem: mockCharactersData.results[0],
    });
});

describe('Character page', () => {
    it('Here should be Character page', () => {
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/character?page=2&name=&id=21']}>
                        <Character />
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
                    <MemoryRouter initialEntries={['/character?page=2&name=&id=21']}>
                        <Character />
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
