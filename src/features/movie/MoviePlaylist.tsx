import { createRandomMovie } from "../../data";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addMovie, removeMovie } from "./moviesSlice";

function MoviePlaylist() {
  const dispatch = useAppDispatch();
  const moviePlaylist = useAppSelector((state) => state.movies);

  const handleMovieAdd = (movie: string) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: string) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => {
            handleMovieRemove(movie);
          }}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => {
              handleMovieAdd(createRandomMovie());
            }}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
