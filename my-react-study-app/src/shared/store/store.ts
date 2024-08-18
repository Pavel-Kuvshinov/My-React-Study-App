import { configureStore } from '@reduxjs/toolkit';
import UncontrolledFormReducer from './slices/uncontrolledFormSlice';
import ReactHookFormReducer from './slices/reactHookFormSlice';
import countries from './slices/countriesSlice';

const store = configureStore({
    reducer: {
        UncontrolledFormReducer,
        ReactHookFormReducer,
        countries,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
