import { configureStore } from "@reduxjs/toolkit";
import { songsSlice } from "../features/song/songsSlice";
import { moviesSlice } from "../features/movie/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
