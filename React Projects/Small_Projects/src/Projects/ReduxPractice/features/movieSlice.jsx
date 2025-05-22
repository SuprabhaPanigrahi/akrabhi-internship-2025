import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;