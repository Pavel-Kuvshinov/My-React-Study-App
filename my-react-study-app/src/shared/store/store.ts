import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemsSelectedReducer from './selectedItemsSlice';
import { itemsApi } from '../api/itemsApi';

const rootReducer = combineReducers({
    itemsSelected: itemsSelectedReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => dispatchHook<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
