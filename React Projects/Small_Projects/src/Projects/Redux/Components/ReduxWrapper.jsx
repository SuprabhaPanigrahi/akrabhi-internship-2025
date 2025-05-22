import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import CounterApp from './CounterApp'; 

export function ReduxWrapper() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}