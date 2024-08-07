import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import DetailedItem from '../src/widgets/detailedItem/detailedItem';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
    useSearchParams: () => ({
        get: (key: string) => {
            const params = new URLSearchParams('?section=character&page=2&name=&id=21');
            return params.get(key);
        },
    }),
}));

describe('Detailed item tests', () => {
    it('Here should be detailed character item', () => {
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
    // it('Detailed item button click check', () => {
    //     const dataItem = mockCharactersData.results[0];
    //     render(
    //         <Provider store={store}>
    //             <ThemeProvider>
    //                 <DetailedItem dataItem={dataItem} />
    //             </ThemeProvider>
    //         </Provider>
    //     );
    //     const closeBtn = screen.getByTestId('button-close-detailed');
    //     userEvent.click(closeBtn);
    //     expect(mockRouter).toMatchObject({
    //         query: {},
    //     });
    // });
});
