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
      <h5>What are controlled components?</h5>
      <p>Value of the input field is controlled by React through state.</p>
      <h5>What are uncontrolled components?</h5>
      <p>
        --Input field maintains its own state using the DOM.
        <br></br>
        --React does not control the value, but it can still interact with the
        input using refs.
      </p>
      <ControlledInput />
      <UncontrolledComponent />
    </div>
  );
}

const UncontrolledComponent = () => {
  const inputRef = React.useRef(null);
  function onChange() {
    console.log(inputRef?.current?.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onChange}>Get Value</button>
    </div>
  );
};
const ControlledInput = () => {
  const [value, setValue] = React.useState("");
  function handleChange() {
    setValue(event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <p>Value: {value}</p>
    </div>
  );
};
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
