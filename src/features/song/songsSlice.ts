import { createSlice, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { reset } from "../movie/movieSlice";

const initialState: string[] = []; // 타입 에러를 방지하기 위해 밖에서 미리 정의
export const reset = createAction("app/reset");

const songsSlice = createSlice({
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
  },
  // extraReducers 를 통해 다른 slice의 action 발생을 감지하고 reducer 생성
  extraReducers(builder) {
    // builder.addCase("movie/reset", () => []);
    // 문자열을 직접 입력하지 않고 action creator만 전달해도 됨
    // builder.addCase(reset, () => []);

    builder.addCase(reset, () => []); // createAction 으로 직접 action creator 만들기
  },
});

export { songsSlice };
export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
