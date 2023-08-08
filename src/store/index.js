import { configureStore } from "@reduxjs/toolkit";
import getSentiment from "../view/pages/HomePage/dailySentimentSlice";

export const store = configureStore({
  reducer: {
    sentiment: getSentiment,
  },
});
