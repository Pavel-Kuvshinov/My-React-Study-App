import { describe, expect, it } from 'vitest';
import { mockCharactersData } from '../src/shared/mocks/mockedData/cards';
import {
    setSelectedItems,
    unsetSelectedItems,
    unsetAllSelectedItems,
    itemsSelectedSlice,
} from '../src/shared/store/selectedItemsSlice';

const mock = mockCharactersData.results[0];
describe('Redux FavoriteCard slice', () => {
    it('Should handle adding a selected card', () => {
        const state = itemsSelectedSlice.reducer({ selectedItems: [] }, setSelectedItems(mock));
        expect(state).toEqual({ selectedItems: [mock] });
    });
    it('Should handle removing a selected card', () => {
        const state = itemsSelectedSlice.reducer({ selectedItems: [mock] }, unsetSelectedItems(mock));
        expect(state).toEqual({ selectedItems: [] });
    });
    it('Should handle clearing all favorites', () => {
        const state = itemsSelectedSlice.reducer({ selectedItems: [] }, unsetAllSelectedItems());
        expect(state).toEqual({ selectedItems: [] });
    });
});
