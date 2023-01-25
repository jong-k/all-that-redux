## store의 state에 접근하기
### 1. store.getState()
store.getState() 함수를 사용하면 전체 state 인 하나의 객체에 접근한다
- 예시
```ts
store.getState();
/*
{
  songs: [ ... ],
  movies: [ ... ],
}
 */
```

### 2. useSelector
react-redux의 useSelector hooks를 사용하면 빠르게 state에 접근할 수 있다

## action이 dispatch될 때, store의 모든 reducer에 보내지게 하기
- reset 버튼으로 movie 와 song 리스트 한번에 초기화하기
### 1. movie, song slice에 각각 dispatch 보내기
- 가장 쉽고, 쓸만한 방법
### 2. extraReducer 이용하기
- extraReducers 를 통해 다른 slice의 action 발생을 감지하고 mini reducer 생성 가능
- builder.addCase("movie/reset", () => []); (action.type을 문자열로 직접 입력)
- builder.addCase(reset, () => []); (action creator를 import 해와서 전달)
  - 또한 createAction 으로 직접 action creator를 만드는 것도 가능
  - const reset = createAction("app/reset"); 이렇게 만들어서 전달
  - 이 경우, movie, song slice에 각각 extraReducer로 등록해줘여 함