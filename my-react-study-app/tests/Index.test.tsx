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
import Index from '../app/routes/_index';

describe('Index', () => {
    it('Here should be Index', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Index />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });

    it('Theme should toggled', () => {
        const funcTheme = vi.spyOn(themeHook, 'useTheme');
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <Index />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );

        const themeBtn = screen.getByTestId('button-theme');
        const header = container.querySelector('.header');
        const main = container.querySelector('.main');
        expect(header).not.toHaveClass('dark');
        expect(main).not.toHaveClass('dark');
        fireEvent.click(themeBtn);
        expect(funcTheme).toHaveBeenCalled();
        expect(header).toHaveClass('dark');
        expect(header).not.toHaveClass('light');
        expect(main).toHaveClass('dark');
        expect(main).not.toHaveClass('light');
    });
});
