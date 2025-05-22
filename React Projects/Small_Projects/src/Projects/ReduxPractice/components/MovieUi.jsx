import MovieInput from './projects/ReduxPractice/components/MovieInput';
import MovieList from './projects/ReduxPractice/components/MovieList';

export default function App() {
  return (
    <div>
      <h1>Favorite Movies (Redux Practice)</h1>
      <MovieInput />
      <MovieList />
    </div>
  );
}