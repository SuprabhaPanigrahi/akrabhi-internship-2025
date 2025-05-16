import React, { useRef } from 'react';

export function UseRef() {

  const inputRef = useRef(null); 

  const handleClick = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}

