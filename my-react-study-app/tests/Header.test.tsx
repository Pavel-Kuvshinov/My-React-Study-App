import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import Header from '../src/widgets/header/header';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as themeHook from '../src/shared/context/themeMode';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
}));

describe('Header', () => {
    it('Here should be header', () => {
        const section = 'character';
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <Header section={section} />
                </ThemeProvider>
            </Provider>
        );

        const headerLogo = screen.getByRole('button', { name: 'Rick and Morty' });
        expect(headerLogo).toBeInTheDocument();
    });

    it('Click on the button changed theme', () => {
        const funcTheme = vi.spyOn(themeHook, 'useTheme');
        const section = 'character';
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <Header section={section} />
                </ThemeProvider>
            </Provider>
        );

        const themeBtn = screen.getByTestId('button-theme');
        userEvent.click(themeBtn);
        expect(funcTheme).toHaveBeenCalled();
    });

    it('Click on the logo goes to the start section', () => {
        const section = 'character';
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <Header section={section} />
                </ThemeProvider>
            </Provider>
        );

        const headerLogo = screen.getByRole('button', { name: 'Rick and Morty' });
        fireEvent.click(headerLogo);
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining(''));
    });
});
