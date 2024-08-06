import { useDispatch, useSelector, useStore } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import itemsSelectedReducer from './selectedItemsSlice';
import { itemsApi } from '../api/itemsApi';
import { createWrapper } from 'next-redux-wrapper';

export function makeStore() {
    return configureStore({
        reducer: {
            items: itemsReducer,
            itemsSelected: itemsSelectedReducer,
            [itemsApi.reducerPath]: itemsApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware),
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const wrapper = createWrapper(makeStore);
