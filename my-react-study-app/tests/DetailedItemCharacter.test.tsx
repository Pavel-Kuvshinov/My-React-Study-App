import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useSearchParams, useLocation } from '@remix-run/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import DetailedItem from '../src/widgets/detailedItem/detailedItem';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';

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

describe('Detailed item tests', () => {
    it('Here should be detailed character item', () => {
        mockSearchParams.set('id', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const dataItemCharacter = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <DetailedItem dataItem={dataItemCharacter} />
                </ThemeProvider>
            </Provider>
        );
        expect(screen.getByText('Name:')).toBeInTheDocument();
    });

    it('Detailed item button click check', async () => {
        mockSearchParams.set('id', '');
        mockSearchParams.set('page', '2');
        mockSearchParams.set('name', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const dataItemCharacter = mockCharactersData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <DetailedItem dataItem={dataItemCharacter} />
                </ThemeProvider>
            </Provider>
        );

        const closeBtn = screen.getByTestId('button-close-detailed');
        userEvent.click(closeBtn);
        await waitFor(() => {
            expect(setSearchParams).toHaveBeenCalledWith('?page=2&name=');
        });
    });
});
