import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataFormStore } from "../../types";

const initialFormState: DataFormStore = {
  name: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  acceptTerms: false,
  picture: "",
  country: "",
};

const ReactHookFormSlice = createSlice({
    name: 'ReactHookForm',
    initialState: initialFormState,
    reducers: {
        setValues(state, action: PayloadAction<Partial<DataFormStore>>) {
          return { ...state, ...action.payload };
        },
        resetValues() {
          return initialFormState;
        },
    },
});

export const { setValues, resetValues } = ReactHookFormSlice.actions;
export default ReactHookFormSlice.reducer;
