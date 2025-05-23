import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '@/Projects/ReduxPractice/features/moviesSlice';

export default function MovieInput() {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (movie.trim()) {
      dispatch(addMovie(movie));
      setMovie('');
    }
  };

  return (
    <div>
      <input 
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
}