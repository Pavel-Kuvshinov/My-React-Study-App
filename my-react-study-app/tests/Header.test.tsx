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

        const headerLogo = screen.getByRole('button', { name: 'Rick and Morty' });
        expect(headerLogo).toBeInTheDocument();
    });

    it('Click on the logo goes to the start section', () => {
        const func = vi.spyOn(storeHooks, 'useAppDispatch');
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Header />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const headerLogo = screen.getByRole('button', { name: 'Rick and Morty' });
        fireEvent.click(headerLogo);
        expect(func).toHaveBeenCalled();
    });
    it('Click on the button changed theme', () => {
        const funcTheme = vi.spyOn(themeHook, 'useTheme');
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Header />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const themeBtn = screen.getByTestId('button-theme');
        userEvent.click(themeBtn);
        expect(funcTheme).toHaveBeenCalled();
    });
});
