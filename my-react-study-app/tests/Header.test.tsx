import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import Header from '../src/widgets/header/header';
import { makeStore } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import mockRouter from 'next-router-mock';
import * as themeHook from '../src/shared/context/themeMode';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Header', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    it('Here should be header', () => {
        const section = 'character';

        render(
            <Provider store={makeStore()}>
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
            <Provider store={makeStore()}>
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
        mockRouter.push({});
        const section = 'character';
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <Header section={section} />
                </ThemeProvider>
            </Provider>
        );

        const headerLogo = screen.getByRole('button', { name: 'Rick and Morty' });
        fireEvent.click(headerLogo);
        // const queryReq = {};
        expect(mockRouter).toMatchObject({
            query: {},
        });
    });
});
