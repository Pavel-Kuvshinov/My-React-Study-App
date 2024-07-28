import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import ItemsSection from '../src/widgets/itemsSection/itemsSection';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

describe('Header', () => {
    it('Here should be item section', () => {
        render(
            <Provider store={store}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <ItemsSection />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });
});
