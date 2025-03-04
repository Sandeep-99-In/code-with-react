import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age:21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="Hitesh" btnText="vist me"/>
=======

function App() {
  let [counter, setCounter] = useState(15)
  
  //let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button><br/>
      <button onClick={removeValue}>Remove value</button>
>>>>>>> b4501cd2b2ff4c3b6d30c1980201979b323e63f8
    </>
  )
}

export default App
