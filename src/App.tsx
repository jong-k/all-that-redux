import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useAppDispatch } from "./app/hooks";
import { reset } from "./features/song/songSlice";

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
