
export function PropDrilling() {
  const user = "Situ";

  return (
    <div>
      <h1>App Component</h1>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild user={user} />
    </div>
  );
}

function GrandChild({ user }) {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello, {user}!</p>
    </div>
  );
}

