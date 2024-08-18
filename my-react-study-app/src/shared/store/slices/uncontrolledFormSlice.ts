import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataFormStore } from '../../types';

const initialFormState: DataFormStore = {
    name: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    acceptTerms: false,
    picture: '',
    country: '',
};

const UncontrolledFormSlice = createSlice({
    name: 'UncontrolledForm',
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

export const { setValues, resetValues } = UncontrolledFormSlice.actions;
export default UncontrolledFormSlice.reducer;
