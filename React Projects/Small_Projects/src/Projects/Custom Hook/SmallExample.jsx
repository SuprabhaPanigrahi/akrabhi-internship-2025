import React, { useState} from "react";

export const useSmallExample = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(prev=>prev+1);
    const decrement = () => setCount(prev=>prev-1);
    const reset = () => setCount(0);
    return {count,increment,decrement,reset};
}



export const SmallExample = () => {
    const {count, increment, decrement, reset}= useSmallExample();
    return (
        <>
        <h1>Count:{count}</h1>
        <button onClick={increment}>Increment</button>
        </>
        
    )
}
