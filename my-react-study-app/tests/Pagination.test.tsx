import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from '../src/widgets/pagination/pagination';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';

const useRouterPushMock = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: useRouterPushMock,
    }),
    usePathname: () => '/',
    useSearchParams: () => ({
        get: (key: string) => {
            const params = new URLSearchParams('?section=character');
            return params.get(key);
        },
    }),
}));

describe('Pagination tests', () => {
    it('Here should be pagination', () => {
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
    });

    it('Pagination buttons click checked', () => {
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
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining('?section=character&page=2&name='));

        const prevPageBtn = screen.getByRole('button', { name: '‹' });
        fireEvent.click(prevPageBtn);
        expect(useRouterPushMock).toHaveBeenCalledWith(expect.stringContaining('?section=character&page=0&name='));
    });
});
