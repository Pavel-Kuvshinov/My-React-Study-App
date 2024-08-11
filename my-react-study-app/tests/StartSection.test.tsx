import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import StartSection from '../src/widgets/startSection/startSection';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

describe('Start section', () => {
    it('Here should be start section', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <StartSection />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const characterButton = screen.getByText('character');
        expect(characterButton).toBeInTheDocument();
        expect(characterButton.tagName).toBe('A');
        expect(characterButton).toHaveAttribute('href', '/character?page=1&name=');
        const episodeButton = screen.getByText('episode');
        expect(episodeButton).toBeInTheDocument();
        expect(episodeButton.tagName).toBe('A');
        expect(episodeButton).toHaveAttribute('href', '/episode?page=1&name=');
        const locationButton = screen.getByText('location');
        expect(locationButton).toBeInTheDocument();
        expect(locationButton.tagName).toBe('A');
        expect(locationButton).toHaveAttribute('href', '/location?page=1&name=');
    });
});
