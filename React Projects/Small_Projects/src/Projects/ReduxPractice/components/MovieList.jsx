import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../features/moviesSlice';

export default function MovieList() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          {movie}
          <button onClick={() => dispatch(removeMovie(index))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}