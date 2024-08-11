import { render, screen } from '@testing-library/react';
import React from 'react';
import { useSearchParams, useLocation } from '@remix-run/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Provider } from 'react-redux';
import DetailedItem from '../src/widgets/detailedItem/detailedItem';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockLocationsData } from '../src/shared/mocks/mockedData/cards';

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
        pathname: '/location',
        search: '?page=1&name=',
    });
});

describe('Detailed item tests', () => {
    it('Here should be detailed location item', () => {
        mockSearchParams.set('id', '');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);
        const dataItemLocation = mockLocationsData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <DetailedItem dataItem={dataItemLocation} />
                </ThemeProvider>
            </Provider>
        );
        expect(screen.getByText('Location:')).toBeInTheDocument();
    });
});
