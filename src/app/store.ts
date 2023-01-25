import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "../features/song/songSlice";
import { movieSlice } from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
