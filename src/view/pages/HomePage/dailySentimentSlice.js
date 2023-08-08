import { createSlice } from "@reduxjs/toolkit";

export const sentimentSlice = createSlice({
  name: "sentiment",
  initialState: { value: [] },
  reducers: {
    getSentiment: (state, action) => {
      console.log(action.payload, 99999999);
      state.value = action.payload;
    },
  },
});

export const { getSentiment } = sentimentSlice.actions;

export default sentimentSlice.reducer;
