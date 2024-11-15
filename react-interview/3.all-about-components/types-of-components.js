function App() {
  return (
    <div>
      <h2>Different Types of Components</h2>
      <h5>What are Smart / Stateful / Container Components ?</h5>
      <p>
        {" "}
        Manages state, contains business logic and passes data down to
        presentational components.
      </p>

      <h5>What are Dumb / Stateless / Presentational Components?</h5>
      <p>
        -- Only renders the UI based on the props it receives.
        <br></br>
        -- Doesn't have its own state or lifecycle methods.
      </p>
      <h5>What are Higher Order Components (HOC) ?</h5>
      <p>
        -- Function that takes a component and returns a new enhanced component.
        <br></br>
        -- Used for code resue, logic sharing, and adding additional
        functinalities to the components.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
