import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../../types";

const initialFormState: FormValues = {
  name: "",
  age: 0,
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  acceptTerms: "",
  picture: "",
  country: "",
};

// const UncontrolledFormSlice = (name: string) => {
//   return createSlice({
//     name,
//     initialState: initialFormState,
//     reducers: {
//       setValues(state, action: PayloadAction<Partial<FormValues>>) {
//         return { ...state, ...action.payload };
//       },
//       resetValues() {
//         return initialFormState;
//       },
//     },
//   });
// };

const ReactHookFormSlice = createSlice({
    name: 'ReactHookForm',
    initialState: initialFormState,
    reducers: {
        setValues(state, action: PayloadAction<Partial<FormValues>>) {
          return { ...state, ...action.payload };
        },
        resetValues() {
          return initialFormState;
        },
    },
});

export const { setValues, resetValues } = ReactHookFormSlice.actions;
export default ReactHookFormSlice.reducer;
