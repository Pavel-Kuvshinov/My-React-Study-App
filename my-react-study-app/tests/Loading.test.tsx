import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Loading from '../app/loading';

describe('Loader', () => {
    it('Here should be loader', () => {
        render(<Loading />);
    });
});
