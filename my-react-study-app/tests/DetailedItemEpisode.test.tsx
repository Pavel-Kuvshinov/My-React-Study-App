import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import DetailedItem from '../src/widgets/detailedItem/detailedItem';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockEpisodesData } from '../src/shared/mocks/mockedData/cards';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
    useSearchParams: () => ({
        get: (key: string) => {
            const params = new URLSearchParams('?section=episode&page=2&name=&id=21');
            return params.get(key);
        },
    }),
}));

describe('Detailed item tests', () => {
    it('Here should be detailed episode item', () => {
        const dataItemEpisode = mockEpisodesData.results[0];
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <DetailedItem dataItem={dataItemEpisode} />
                </ThemeProvider>
            </Provider>
        );
        expect(screen.getByText('Episode:')).toBeInTheDocument();
    });
});
