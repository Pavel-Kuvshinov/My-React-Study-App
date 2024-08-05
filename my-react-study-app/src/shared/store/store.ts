import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import itemsSelectedReducer from './selectedItemsSlice';
import { itemsApi } from '../api/itemsApi';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
    itemsReducer,
    itemsSelectedReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
});

export function makeStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware),
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => dispatchHook<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const wrapper = createWrapper(makeStore);
