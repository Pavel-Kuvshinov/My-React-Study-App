/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ElementRequest } from '../types';

interface ItemsState {
    selectedItems: ElementRequest[];
}

const initialState: ItemsState = {
    selectedItems: [],
};

export const itemsSelectedSlice = createSlice({
    name: 'itemsSelected',
    initialState,
    reducers: {
        setSelectedItems: (state, action: PayloadAction<ElementRequest>) => {
            state.selectedItems.push(action.payload);
        },
        unsetSelectedItems: (state, action: PayloadAction<ElementRequest>) => {
            state.selectedItems.splice(
                state.selectedItems.findIndex((elem) => JSON.stringify(elem) === JSON.stringify(action.payload)),
                1
            );
        },
        unsetAllSelectedItems: (state) => {
            state.selectedItems = [];
        },
    },
});

export default itemsSelectedSlice.reducer;
