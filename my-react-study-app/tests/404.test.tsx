import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page404 from '../pages/404';
import React from 'react';

describe('Page 404', () => {
    it('renders the not found page correctly', () => {
        render(<Page404 />);
        expect(screen.getByText('Sorry, we can’t find this page')).toBeInTheDocument();
    });
});
