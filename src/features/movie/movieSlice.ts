import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../song/songSlice";

const initialState: string[] = [];

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    // reset() {
    //   // state = [] 이렇게 하면 안됨, 상태를 바꾸려면 기존 상태를 이용해서 새로운 상태를 만들어야 함
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => []);
  },
});

export { movieSlice };
export const { addMovie, removeMovie } = movieSlice.actions;
// export default songSlice.reducer
