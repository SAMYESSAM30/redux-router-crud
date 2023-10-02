import { createSlice } from "@reduxjs/toolkit";

const initalState = { records: [], loding: false, error: null };
const postSlice = createSlice({
  name: "post",
  initalState,
  reducers: {},
  extraReducers: {}
});
export default postSlice.reducer;