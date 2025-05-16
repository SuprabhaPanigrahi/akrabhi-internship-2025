// UserContext.js
import { createContext } from "react";

export const UserContext = createContext();



// App.js
import React from "react";
import { UserContext } from "./UserContext";
import Child from "./Child";

function App() {
  const user = "Situ";

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>App Component</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;



// Child.js
import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}

export default Child;


// GrandChild.js
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello, {user}!</p>
    </div>
  );
}

export default GrandChild;



// GrandChild.js
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello, {user}!</p>
    </div>
  );
}

export default GrandChild;
