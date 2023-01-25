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