import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Loader from '../src/widgets/loader/loader';

describe('Loader', () => {
    it('Here should be loader', () => {
        render(<Loader />);
    });
});
