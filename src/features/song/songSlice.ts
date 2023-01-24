import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const initialState: string[] = []; // 타입 에러를 방지하기 위해 밖에서 미리 정의

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // TODO
    },
  },
});

export { songSlice };
export const { addSong } = songSlice.actions;
export const selectSongs = (state: RootState) => state.songs;
// export default songSlice.reducer
