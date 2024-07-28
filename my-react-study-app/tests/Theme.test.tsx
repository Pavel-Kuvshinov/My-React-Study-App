import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from '../src/widgets/header/header';

describe('useTheme', () => {
    it('Should throw error if used outside provider', () => {
        vi.spyOn(console, 'error').mockImplementation(() => null);
        expect(() => render(<Header />)).toThrowError();
    });
});
