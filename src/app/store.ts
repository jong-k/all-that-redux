import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "../features/song/songSlice";

export const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
