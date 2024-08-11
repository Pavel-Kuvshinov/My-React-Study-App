import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi, Mock } from 'vitest';
import { useSearchParams } from '@remix-run/react';
import Pagination from '../src/widgets/pagination/pagination';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';

vi.mock('@remix-run/react', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@remix-run/react')>();
    return {
        ...actual,
        useSearchParams: vi.fn(),
    };
});

const setSearchParams = vi.fn();
const mockSearchParams = new URLSearchParams();

describe('Pagination tests', () => {
    it('Pagination should be rendered and next button clicked', async () => {
        mockSearchParams.set('page', '2');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);

        const { info } = mockCharactersData;
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

        await waitFor(() => {
            expect(setSearchParams).toHaveBeenCalledWith('?page=3&name=');
        });
    });

    it('Pagination should be rendered and prev button clicked', async () => {
        mockSearchParams.set('page', '2');
        (useSearchParams as Mock).mockReturnValue([mockSearchParams, setSearchParams]);

        const { info } = mockCharactersData;
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

        const nextPageBtn = screen.getByRole('button', { name: '‹' });
        fireEvent.click(nextPageBtn);

        await waitFor(() => {
            expect(setSearchParams).toHaveBeenCalledWith('?page=1&name=');
        });
    });
});
