import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../action';

export default function CounterApp() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}