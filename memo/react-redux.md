# react-redux
> react와 redux를 연결해주는 라이브러리로, 편리한 기능을 제공

## 1. provider
provider를 통해 store에 간편하게 접근할 수 있게 해준다
### 1.1. store에서 store를 export 해준다
### 1.2. index.js 파일에서 store를 import 해준다
### 1.3. react-redux 라이브러리에서 Provider를 import 한다
### 1.4. App 컴포넌트를 Provider로 감싸고, store를 전달해준다

## 2. useDispatch로 상태 변화시키기
### 2.1. slice를 만들고 특정 조건에서 state를 바꾸는 reducer를 추가한다
### 2.2. slice가 자동으로 생성하는 action creator를 export한다
### 2.3. dispatch를 실행할 컴포넌트를 찾는다
### 2.4. react-redux에서 import : action creator function, useDispatch
### 2.5. 컴포넌트 최상단에서 useDispatch hook을 호출
### 2.6. 유저가 특정 행동을 하면 action을 만드는 action creator 함수를 호출하고, dispatch 실행

## 3. useSelector로 상태에 접근하기
### 3.1. 상태가 필요한 컴포넌트 찾기
### 3.2. import useSelector hook from react-redux
### 3.3. hook을 호출하고, selector 함수를 전달
### 3.4. 상태 참조 가능! - 상태가 변화하면 자동으로 컴포넌트가 리렌더링됨
```ts
// useSelector 안쓰고 직접 state에 접근하는 방법
const startingState = store.getState();

// useDispatch 안쓰고 직접 dispatch하는 방법 1
store.dispatch({
  type: "song/addSong",
  payload: "New Song!!!",
});
// useDispatch 안쓰고 직접 dispatch하는 방법 2
store.dispatch(songSlice.actions.addSong("New Song2!!!"));

```