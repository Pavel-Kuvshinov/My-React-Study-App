import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import Pagination from '../src/widgets/pagination/pagination';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Pagination tests', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    it('Here should be pagination', () => {
        const { info } = mockCharactersData;
        mockRouter.push('/?currentPage=3');
        render(
            <Pagination
                info={{
                    count: info.count,
                    next: info.next,
                    pages: info.pages,
                    prev: info.prev,
                }}
            />
        );
    });

    it('Pagination buttons click checked', () => {
        const { info } = mockCharactersData;
        mockRouter.push('/?currentPage=3');
        render(
            <Pagination
                info={{
                    count: info.count,
                    next: info.next,
                    pages: info.pages,
                    prev: info.prev,
                }}
            />
        );

        const nextPageBtn = screen.getByRole('button', { name: '›' });
        fireEvent.click(nextPageBtn);
        expect(mockRouter).toMatchObject({
            query: { currentPage: 3 },
        });
        const prevPageBtn = screen.getByRole('button', { name: '‹' });
        fireEvent.click(prevPageBtn);
        expect(mockRouter).toMatchObject({
            query: { currentPage: 1 },
        });
    });
});
