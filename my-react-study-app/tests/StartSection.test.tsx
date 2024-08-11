import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import StartSection from '../src/widgets/startSection/startSection';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
}));

describe('Start section', () => {
    it('Here should be start section', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <StartSection />
                </ThemeProvider>
            </Provider>
        );
    });

    it('Clicking the start item button saves the section name to the storage', async () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <StartSection />
                </ThemeProvider>
            </Provider>
        );

        const characterButton = screen.getByRole('button', { name: 'character' });
        fireEvent.click(characterButton);
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining('?section=character'));

        const episodeButton = screen.getByRole('button', { name: 'episode' });
        fireEvent.click(episodeButton);
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining('?section=episode'));

        const locationButton = screen.getByRole('button', { name: 'location' });
        fireEvent.click(locationButton);
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining('?section=location'));
    });
});
