function App() {
  return (
    <div>
      <h2>State vs Props Interview Questions</h2>
      <h5>Explain state vs props in class and functional components</h5>
      <h5>Class Based Components</h5>
      <ParentComponent />
      <Counter />
    </div>
  );
}
//Funtion based components
const ChildComponentFn = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

//props

//Class based components
//Parent component

class ParentComponent extends React.Component {
  render() {
    return <ChildComponentFn name="John" age={25} />;
  }
}
//Child Component
class ChildComponent extends React.Component {
  render() {
    const [name, age] = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

//state

//state in class based components

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}
// state in functional components
const CounterFn = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
