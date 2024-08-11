import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import Header from '../src/widgets/header/header';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';
import * as themeHook from '../src/shared/context/themeMode';

describe('Header', () => {
    it('Here should be header', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Header />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const linkElement = screen.getByText('Rick & Morty');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toBe('A');
        expect(linkElement).toHaveAttribute('href', '/');
        const themeBtn = screen.getByTestId('button-theme');
        expect(themeBtn).toBeInTheDocument();
    });

    it('Click on the button changed theme', () => {
        const funcTheme = vi.spyOn(themeHook, 'useTheme');
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Header />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const themeBtn = screen.getByTestId('button-theme');
        const header = container.querySelector('.header');
        expect(header).not.toHaveClass('dark');
        fireEvent.click(themeBtn);
        expect(funcTheme).toHaveBeenCalled();
        expect(header).toHaveClass('dark');
        expect(header).not.toHaveClass('light');
    });
});
