function App() {
  return (
    <div>
      <h2>State vs Props Interview Questions</h2>
      <h5>Explain state vs props in class and functional components</h5>
      <h5>Class Based Components</h5>
      <ParentComponent />
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
