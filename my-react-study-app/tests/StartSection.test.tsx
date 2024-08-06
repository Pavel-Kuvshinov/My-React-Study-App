import { fireEvent, render, screen } from '@testing-library/react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import StartSection from '../src/widgets/startSection/startSection';
import { makeStore } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Start section', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });
    it('Here should be start section', () => {
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <StartSection />
                </ThemeProvider>
            </Provider>
        );
    });

    it('Clicking the start item button saves the section name to the storage', async () => {
        mockRouter.push('character');
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <StartSection />
                </ThemeProvider>
            </Provider>
        );

        const characterButton = screen.getByRole('button', { name: 'character' });
        await fireEvent.click(characterButton);
        expect(mockRouter).toMatchObject({
            query: { section: 'character' },
        });

        const episodeButton = screen.getByRole('button', { name: 'episode' });
        await fireEvent.click(episodeButton);
        expect(mockRouter).toMatchObject({
            query: { section: 'episode' },
        });

        const locationButton = screen.getByRole('button', { name: 'location' });
        await fireEvent.click(locationButton);
        expect(mockRouter).toMatchObject({
            query: { section: 'location' },
        });
    });
});
