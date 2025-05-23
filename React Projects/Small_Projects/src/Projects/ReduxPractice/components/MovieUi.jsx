import MovieInput from './MovieInput';
import MovieList from './/MovieList';

export const MovieUi = () => {
  return (
    <div>
      <h1>Favorite Movies</h1>
      <MovieInput />
      <MovieList />
    </div>
  );
}