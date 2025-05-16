import { useReducer } from "react";

export const Count = () => {

  const reducer = (state, action) => {
    console.log(state, action);

    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    if (action.type === "RESET") {
      return 0;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
};
