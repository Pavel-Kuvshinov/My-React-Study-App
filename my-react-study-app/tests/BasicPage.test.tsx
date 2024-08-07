import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import Header from '../src/widgets/header/header';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';
import * as themeHook from '../src/shared/context/themeMode';
import BasicPage from '../src/pages/basicPage';

describe('Basic page', () => {
    it('Here should be basic page', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <BasicPage />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });

    it('Should be light theme', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <BasicPage />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(container.firstElementChild?.classList.contains('dark')).toBeFalsy();
    });

    it('Should be dark theme', async () => {
        const funcTheme = vi.spyOn(themeHook, 'useTheme');
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <BasicPage />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const themeBtn = screen.getByTestId('button-theme');
        await fireEvent.click(themeBtn);

        expect(funcTheme).toHaveBeenCalled();
        expect(container.firstElementChild?.className.includes('dark')).toBeTruthy();
    });
});
