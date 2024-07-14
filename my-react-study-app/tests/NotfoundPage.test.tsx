import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../src/1_app/app';
import React from 'react';

describe('Ensure that the 404 page is displayed when navigating to an invalid route.', () => {
  it('should render - Sorry, there is no data for your requiest', async () => {
    render(
      <MemoryRouter initialEntries={['/caqsseE']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByText('Sorry, we can’t find this page')).toBeInTheDocument();
  });
});
