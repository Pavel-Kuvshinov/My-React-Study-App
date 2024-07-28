import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import DetailedItem from '../src/widgets/detailedItem/detailedItem';
import { store } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';
import * as storeHooks from '../src/shared/store/store';

describe('Detailed item tests', () => {
    it('Here should be detailed item', () => {
        render(
            <Provider store={store()}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/']}>
                        <DetailedItem />
                    </MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });
});
