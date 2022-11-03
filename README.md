# redux-playlist
## 1. useReducer vs Redux
### 1.1. useReducer에서는...
Redux 와 useReducer는 action, dispatch, reducer의 개념이 일치한다. 그러나 몇 가지 차이점도 있다.
- useReducer는 React의 Hook이다
- 따라서 useReducer 에서는 모든 state가 React에 의해 만들어지고 관리된다
```
---------------------
App                 |
useReducer -> state |
---------------------
          |
     CounterPage
          |
      ---------
      |       |
  Button    Panel              

```
### 1.2. 반면 Redux 에서는...
- `store` 에서 state를 만들고 관리한다
- 모든 컴포넌트는 store를 통해 state에 접근한다
```
-------------
Redux Store |
-------------
 ||
 \/
Dispatch Function
 ||
 \/
Reducer (feature 별로 존재)
 ||
 \/
state                            
```
- 그러나 Redux는 React에 국한되어 있지 않기 때문에 `react-redux` 라이브러리를 사용하여 React 환경에서 편리하게 Redux를 사용한다
- 또한 기능 단위별로 여러 개의 reducer를 사용

## 2. Redux vs Redux Toolkit
### 2.1. 기존 Redux의 장단점
Redux에서는 state를 변경하려면 무조건 dispatch 함수를 호출해야 한다. 이는 여러 장점을 갖는다.
- state를 한 곳에서 관리한다
- 왜 state가 변화하는지 파악하기 쉽다

반면 단점도 존재한다
- 작성해야할 boilerplate code가 많다
### 2.2. Redux Toolkit (RTK)
RTK는 일반 Redux에 추가 기능을 더해, Redux를 사용하는 최신 방법이다
- action type 생성을 간소화
- 공식적으로 권장되는 방법