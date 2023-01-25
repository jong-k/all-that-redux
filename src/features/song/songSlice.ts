import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = []; // 타입 에러를 방지하기 위해 밖에서 미리 정의

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state, action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSong() {
      return [];
    },
  },
});

export { songSlice };
export const { addSong, removeSong, resetSong } = songSlice.actions;
// export default songSlice.reducer
