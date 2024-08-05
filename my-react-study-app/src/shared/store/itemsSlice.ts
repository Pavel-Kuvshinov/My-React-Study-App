import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { itemsApi } from '../api/itemsApi';

interface ItemsState {
    currentRequest: string;
    currentPage: number;
    currentId: number | null;
    section: string;
    loading: boolean;
    loadingCard: boolean;
    error: boolean;
}

const initialState: ItemsState = {
    currentRequest: '',
    currentPage: 1,
    currentId: null,
    section: '',
    loading: true,
    loadingCard: true,
    error: false,
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setSection: (state, action: PayloadAction<string>) => {
            state.section = action.payload;
            state.loading = true;
        },
        setStartСondition: (state, action: PayloadAction<string>) => {
            state.section = action.payload;
            state.currentRequest = action.payload;
            state.currentPage = 1;
            state.currentId = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setLoadingCard: (state, action: PayloadAction<boolean>) => {
            state.loadingCard = action.payload;
        },
        setCurrentRequest: (state, action: PayloadAction<string>) => {
            state.currentRequest = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setCurrentId: (state, action: PayloadAction<number | null>) => {
            state.currentId = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addMatcher(itemsApi.endpoints.getItems.matchPending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addMatcher(itemsApi.endpoints.getItems.matchFulfilled, (state) => {
            state.loading = false;
        });
        builder.addMatcher(itemsApi.endpoints.getItems.matchRejected, (state) => {
            state.loading = false;
            state.error = true;
        });
        builder.addMatcher(itemsApi.endpoints.getItem.matchPending, (state) => {
            state.loadingCard = true;
            state.error = false;
        });
        builder.addMatcher(itemsApi.endpoints.getItem.matchFulfilled, (state) => {
            state.loadingCard = false;
        });
        builder.addMatcher(itemsApi.endpoints.getItem.matchRejected, (state) => {
            state.loadingCard = false;
            state.error = true;
        });
    },
});

export default itemsSlice.reducer;
