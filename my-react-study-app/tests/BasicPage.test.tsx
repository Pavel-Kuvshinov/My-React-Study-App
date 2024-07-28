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
});
