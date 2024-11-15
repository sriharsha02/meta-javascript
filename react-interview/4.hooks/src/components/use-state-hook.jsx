import { useState } from "react"

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const handleIncrement = () =>{
    setCount2(count2 + 3)
  }

  return (
    <div>
      <h3>useState Hook</h3>
      <h5>Explain useState Hook</h5>
      {/*
        useState is a hook in React that allows functional components to manage state by declaring state variables and providing a function to update them.
      */ }
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <h5>What is the Output?</h5>
      <p>Count: {count2}</p>
      <button onClick={handleIncrement}>Increment by 3</button>
    </div>
  )
}

export default UseStateHook