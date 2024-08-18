import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../constants";

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;