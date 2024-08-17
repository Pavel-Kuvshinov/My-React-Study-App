import { configureStore } from "@reduxjs/toolkit";
import UncontrolledFormReducer from "./slices/uncontrolledFormSlice";
import ReactHookFormReducer from "./slices/reactHookFormSlice";

const store = configureStore({
  reducer: {
    UncontrolledFormReducer,
    ReactHookFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
