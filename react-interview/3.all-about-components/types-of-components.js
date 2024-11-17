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
      <EnhancedFeature />
      <h5>What are Pure Components?</h5>
      <p>
        Optimize the rendering performance of components by reducing unnecessary
        re renders.
        <Counter />
      </p>
    </div>
  );
}
const Counter = () => {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <MemoizedComponent />
    </div>
  );
};
const MemoizedComponent = React.memo(() => {
  console.log("Pure Component Rerendered");
  return <div>Pure Class Component</div>;
});
const withLogin = (WrappedComponent) => {
  return () => {
    function login() {
      //login logic
      console.log("Login Successful");
    }
    function logout() {
      //logout logic
      console.log("Logout Successful");
    }
    return <WrappedComponent login={login} logout={logout} />;
  };
};

const FeatureComponent = (props) => {
  function handleLogin() {
    props.login();
  }
  function handleLogout() {
    props.logout();
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
const EnhancedFeature = withLogin(FeatureComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
