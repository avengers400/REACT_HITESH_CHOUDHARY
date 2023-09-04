import React from 'react';
import { useState, useMemo } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0)
  const[show, setShow] = useState(true)

  const increment = () => {
    console.log("Heyyyyy")
    setNumber(number + 1)
  }

  const changeText = () => {
    setShow(!show)
  }
    
  } 

  const showNo = (myNum) => {
    console.log("heyyy")
    return myNum
  }
  const finalNo =  useMemo(() =>
   {return showNo(number)},
   [myNum])
  // const finalNo = showNo(number)
  return (
  <>
    <button onClick={increment}> Click ME</button>
    <p>The number is {number}</p>
    <p>{finalNo}</p>
    
    <button onClick={changeText}>{show ? "Click here" : "Clicked"}</button>
  </>
    
  );


export default App;
