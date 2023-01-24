# Slice의 역할 3가지
## 1. initial state를 정의한다
- initial state는 문자열, 배열, 객체 등 모든 것이 될 수 있다
## 2. 작은 리듀서들을 모아서 하나의 큰 리듀서로 만든다
- useReducer에서 작성해야 했던 복잡한 boilerplate code (switch 문)를 작성할 필요가 없다
- 대신 개별 slice에 reducer들을 작성한다
## 3. action creator 함수들을 만든다
- action creator 함수 예시
```ts
{
  addSong(payload) {
    return {
      type: "song/addSong",
      payload: payload
    };
  },
  removeSong(payload) {
    return {
      type: "songs/removeSong",
      payload: payload
    }
  }
}
```

