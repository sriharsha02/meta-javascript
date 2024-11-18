import { useState } from "react"

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState()

  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    email:""
  })
  
  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    setuserData({...userData, [name] : value})
  }
  const increment = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
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
      <h4>What is two way data binding and how can you achieve it in React?</h4>
      <p>
        --It is concept that allows synchronization of data between model (or state) and the view in both directions.
        <br></br>
        --You can achieve it by combining state management with controlled components.</p>
      <p>Input Value: {value}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <h5>Build a form containing First name, Last name and email. Use only one state to manage all fields.</h5>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log(userData)}}>
          <input placeholder="Enter First Name" type="text" name="firstName" onChange={handleInputChange}/>
          <input placeholder="Enter Last Name" type="text" name="lastName" onChange={handleInputChange}/>
          <input placeholder="Enter Email" type="email" name="email" onChange={handleInputChange}/>
          <button>Submit</button>
        </form>


    </div>
  )
}

export default UseStateHook