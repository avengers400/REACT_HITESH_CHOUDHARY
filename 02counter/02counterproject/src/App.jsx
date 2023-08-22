import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // let counter = 5

  let [counter, setContext] = useState(15)

  function addValue(){
    // console.log("value added: ", Math.random());
   
  if (counter < 20) {
    counter = counter + 1
    setContext(counter)
  }
  }

  function removeValue(){
    // console.log("value added: ", Math.random());
   
  if (counter > -4) {
    counter = counter - 1
    setContext(counter)
  }
  }
  return (
    <>
           <h1>Chai aur React</h1>
           <h2>Counter value: {counter}</h2>
           <button onClick={addValue}>Add value: {counter}</button>
           <br />
           <button onClick={removeValue}> Remove value: {counter} </button>

      
    </>
  )
}

export default App
