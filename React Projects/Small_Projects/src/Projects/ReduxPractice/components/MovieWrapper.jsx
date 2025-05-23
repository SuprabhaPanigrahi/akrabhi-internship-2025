import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/Projects/ReduxPractice/app/store';
import { MovieUi } from './MovieUi';

const MovieWrapper = () => (
  <Provider store={store}>
    <MovieUi />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieUi /> 
  </React.StrictMode>
);

export { MovieWrapper };