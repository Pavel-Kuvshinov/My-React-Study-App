import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import ErrorSection from '../src/widgets/errorSection/errorSection';
import { makeStore } from '../src/shared/store/store';
import { ThemeProvider } from '../src/shared/context/themeMode';

describe('Header', () => {
    it('Here should be error section', () => {
        render(
            <Provider store={makeStore()}>
                <ThemeProvider>
                    <ErrorSection />
                </ThemeProvider>
            </Provider>
        );
    });
});
