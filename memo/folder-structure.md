# redux 프로젝트의 폴더 구조
## 1. Function 기준으로 정리
src/
├─ components/        <- 모든 컴포넌트
│  ├─ MoviePlaylist.tsx
│  └─ SongPlaylist.tsx
├─ store/
│  ├─ actions/
│  │  └─ actions.ts
│  ├─ slices/          <- Redux Slice
│  │  ├─ moviesSlice.ts
│  │  └─ songsSlice.ts
│  └─ index.ts         <- Redux Store
├─ App.tsx
└─ index.ts

## 2. Feature 기준으로 정리 (공식 문서에서 권장)
src/
├─ feature/        <- 모든 기능을 내부 폴더에 정리
│  ├─ movies/
│  │  ├─ MovieList.tsx
│  │  └─ MovieSlice.ts
│  └─ songs/
│     ├─ SongList.tsx
│     └─ SongSlice.ts
├─ app/
│  ├─ store.ts
│  ├─ hooks.ts
│  └─ app.tsx
└─ index.ts

## 3. 공식 문서에서는...
- 어느 것을 사용해도 무방하다!
- Redux Toolkit 공식 문서에서는 별도지침 없음
- RTK 에서는 `Feature` 방식이 잘 맞지 않음
  - circular import 이슈 있음