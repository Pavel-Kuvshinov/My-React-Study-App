import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import DetailedItemsControls from '../src/widgets/detailedSection/detailedItemsControls';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';

describe('Header', () => {
    it('Here should be detailed section', () => {
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <DetailedItemsControls />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        expect(screen.getByText('Selected items:')).toBeInTheDocument();
        expect(screen.getByText('Unselect all')).toBeInTheDocument();
        expect(screen.getByText('Download csv')).toBeInTheDocument();
    });

    it('should have a download link with correct href', async () => {
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <DetailedItemsControls />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const downloadLink = screen.getByText('Download csv');
        expect(downloadLink).toHaveAttribute('download', '0_selectedItems.csv');
    });

    it('Click on the unselect all button unselects all items', () => {
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <DetailedItemsControls />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const unselectBtn = screen.getByRole('button', { name: 'Unselect all' });
        fireEvent.click(unselectBtn);
        expect(func).toHaveBeenCalled();
    });
});
