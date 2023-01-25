import MoviePlaylist from "../features/movie/MoviePlaylist";
import SongPlaylist from "../features/song/SongPlaylist";
import { useAppDispatch } from "./hooks";
import { reset } from "../features/song/songsSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button
        onClick={() => {
          handleResetClick();
        }}
        className="button is-danger"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
