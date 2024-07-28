import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import StartSection from '../src/widgets/startSection/startSection';
import { store, useAppSelector } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';
import * as themeHook from '../src/shared/context/themeMode';

describe('Start section', () => {
    it('Here should be start section', () => {
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <StartSection />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });

    it('Clicking the start item button saves the section name to the storage', async () => {
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <StartSection />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const characterButton = screen.getByRole('button', { name: 'character' });
        await fireEvent.click(characterButton);
        expect(func).toHaveBeenCalled();

        const episodeButton = screen.getByRole('button', { name: 'episode' });
        await fireEvent.click(episodeButton);
        expect(func).toHaveBeenCalled();

        const locationButton = screen.getByRole('button', { name: 'location' });
        await fireEvent.click(characterButton);
        expect(func).toHaveBeenCalled();
    });
});
